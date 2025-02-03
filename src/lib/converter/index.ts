import fs from "fs";
import { HanjaCharacter, Passage, Problem, StudySet } from "../../types/study";
import { CollectedInfo, Section } from "./types";
import { generateHanjaId, generatePassageId, generateProblemId, parseOptions } from "./utils";


class HanjaCollector {
  private items = new Map<string, CollectedInfo>();

  addInfo(char: string, meaning: string): void {
    if (!char || !meaning || !/[一-龥]/.test(char)) return;

    const info = this.items.get(char) ?? {
      character: char,
      meanings: new Set(),
      problems: new Set(),
      passages: new Set(),
    };

    info.meanings.add(meaning.trim());
    this.items.set(char, info);
  }

  addReference(chars: string, problemId?: string, passageId?: string): void {
    const info = this.items.get(chars);
    if (!info) return;

    if (problemId) info.problems.add(problemId);
    if (passageId) info.passages.add(passageId);
  }

  hasItem(chars: string): boolean {
    return this.items.has(chars);
  }

  getInfo(chars: string): CollectedInfo | undefined {
    return this.items.get(chars);
  }

  getAllItems(): [string, CollectedInfo][] {
    return Array.from(this.items.entries());
  }

  get itemCount(): number {
    return this.items.size;
  }

  toStudySetData(): { hanjas: HanjaCharacter[] } {
    const hanjas: HanjaCharacter[] = this.getAllItems()
      .filter(([_, info]) => info.meanings.size > 0)
      .map(([chars, info]) => ({
        id: generateHanjaId(chars),
        character: chars,
        meaning: Array.from(info.meanings).join(", "),
        reference_problem_ids: Array.from(info.problems),
        reference_passage_ids: Array.from(info.passages),
      }));

    return { hanjas };
  }

  findHanjaInText(text: string): { hanjaIds: Set<string> } {
    const hanjaIds = new Set<string>();
    
    // 한자 패턴: 한자 문자들을 포함하는 정규식
    const hanjaPattern = /[一-龥]+/g;
    const matches = text.match(hanjaPattern) || [];
    
    // 긴 한자 단어부터 매칭 시도
    Array.from(this.items.keys())
      .sort((a, b) => b.length - a.length)
      .forEach((chars) => {
        matches.forEach(match => {
          if (match === chars) {
            // 완전 일치하는 경우에만 추가
            hanjaIds.add(generateHanjaId(chars));
          } else if (match.includes(chars) && chars.length === 1) {
            // 단일 한자인 경우 포함 관계 확인
            hanjaIds.add(generateHanjaId(chars));
          }
        });
      });

    return { hanjaIds };
  }
}

// 한자 정보 추출 개선
const buildHanjaDatabase = (text: string): HanjaCollector => {
  const database = new HanjaCollector();
  const hanjaPattern = /([一-龥]+)\s*\(([^)]+)\)/g;
  
  for (const match of text.matchAll(hanjaPattern)) {
    const [_, chars, info] = match;
    database.addInfo(chars, info.trim());
  }

  return database;
};

const parseSections = (text: string): Section[] => {
  const sections: Section[] = [];
  const sectionMatches = text.matchAll(/\[(\d+)~(\d+)\](.*?)(?=\[\d+~\d+\]|$)/gs);

  for (const match of sectionMatches) {
    const [_, start, end, content] = match;
    const section: Section = {
      range: [parseInt(start), parseInt(end)],
      questions: [],
    };

    // 지문이 있는지 확인
    if (content.includes("다음 글을 읽고 물음에 답하시오.")) {
      const [passageContent, ...questionContents] = content.split(/\d+\./);
      section.passage = passageContent.replace("다음 글을 읽고 물음에 답하시오.", "").trim();

      // 문제 파싱
      questionContents.forEach((qContent, idx) => {
        const questionNumber = parseInt(start) + idx;
        const lines = qContent.trim().split("\n");
        const questionText = lines[0].trim();
        const answerMatch = questionText.match(/\s(\d+)\s*$/);
        const answer = answerMatch?.[1] || "";
        const question = questionText.replace(/\s\d+\s*$/, "").trim();

        // 선택지 처리 - parseOptions 함수 사용
        const options = lines.length > 1 ? parseOptions(lines.slice(1)) : [];

        section.questions.push({
          number: questionNumber,
          text: question,
          options,
          answer,
          type: question.includes("漢字로 쓰시오") ? "PASSAGE_SHORT_ANSWER" : "PASSAGE_MULTIPLE_CHOICE",
        });
      });
    } else {
      // 단순 객관식 문제 파싱
      const questionBlocks = content.split(/\d+\./).slice(1);
      questionBlocks.forEach((block, idx) => {
        const lines = block.trim().split("\n");
        const questionText = lines[0].trim();
        const answerMatch = questionText.match(/\s(\d+)\s*$/);
        const answer = answerMatch?.[1] || "";
        const question = questionText.replace(/\s\d+\s*$/, "").trim();

        // 선택지 파싱 수정
        const options =
          lines.length > 1
            ? parseOptions(lines.slice(1)) // 첫 줄(문제)을 제외한 나머지 줄을 선택지로 처리
            : [];

        section.questions.push({
          number: parseInt(start) + idx,
          text: question,
          options,
          answer,
          type: "BASIC_MULTIPLE_CHOICE",
        });
      });
    }

    sections.push(section);
  }

  return sections;
};

const convertToStudySet = (
  sections: Section[],
  hanjaDB: HanjaCollector,
  examType: string = "BASIC",
  examNumber: string = "001",
): StudySet => {
  const { hanjas } = hanjaDB.toStudySetData();
  const problems: Problem[] = [];
  const passages: Passage[] = [];

  sections.forEach((section, sectionIndex) => {
    // 지문 처리
    let passageId: string | undefined;
    if (section.passage) {
      passageId = generatePassageId(examType, examNumber, sectionIndex + 1);
      const { hanjaIds } = hanjaDB.findHanjaInText(section.passage);

      passages.push({
        id: passageId,
        text: section.passage,
        hanja_ids: Array.from(hanjaIds),
        reference_problem_ids: [],
      });

      // 양방향 참조 관계 업데이트
      hanjaIds.forEach((hanjaId) => {
        const hanja = hanjas.find((h) => h.id === hanjaId);
        if (hanja) {
          if (!hanja.reference_passage_ids.includes(passageId!)) {
            hanja.reference_passage_ids.push(passageId!);
          }
        }
      });
    }

    // 문제 처리
    section.questions.forEach((q) => {
      const problemId = generateProblemId(examType, examNumber, q.number);
      const allHanjaIds = new Set<string>();

      // 문제 텍스트와 선택지에서 한자 찾기
      [q.text, ...q.options].forEach(text => {
        const { hanjaIds } = hanjaDB.findHanjaInText(text);
        hanjaIds.forEach(id => allHanjaIds.add(id));
      });

      problems.push({
        id: problemId,
        type: q.type,
        question: q.text,
        options: q.options,
        answer: q.answer,
        reference_passage_ids: passageId ? [passageId] : [],
        hanja_ids: Array.from(allHanjaIds),
      });

      // 양방향 참조 관계 업데이트
      allHanjaIds.forEach((hanjaId) => {
        const hanja = hanjas.find((h) => h.id === hanjaId);
        if (hanja) {
          if (!hanja.reference_problem_ids.includes(problemId)) {
            hanja.reference_problem_ids.push(problemId);
          }
        }
      });

      // 지문이 있는 경우 지문-문제 참조 관계도 업데이트
      if (passageId) {
        const passage = passages.find(p => p.id === passageId);
        if (passage && !passage.reference_problem_ids.includes(problemId)) {
          passage.reference_problem_ids.push(problemId);
        }
      }
    });
  });

  return { hanjas, problems, passages };
};

// 실행 부분
try {
  console.log("Starting conversion...");
  const rawText = fs.readFileSync("resources/test3.md", "utf-8");
  console.log("File read successfully");

  const hanjaDB = buildHanjaDatabase(rawText);
  const stats = hanjaDB.itemCount;
  console.log(`Built hanja database with ${stats} items`);

  const sections = parseSections(rawText);
  console.log(`Parsed ${sections.length} sections`);

  const studySet = convertToStudySet(sections, hanjaDB);
  console.log(`Converted to study set with ${studySet.hanjas.length} hanjas and ${studySet.problems.length} problems`);

  fs.writeFileSync("resources/test3.json", JSON.stringify(studySet, null, 2));
  console.log("Conversion completed successfully");
} catch (error) {
  console.error("Error during conversion:", error);
}
