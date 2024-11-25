import fs from "fs";
import { HanjaCharacter, Passage, Problem, StudySet } from "../types/study";

// 기본 인터페이스 정의
interface Section {
  range: [number, number];
  passage?: string;
  questions: RawQuestion[];
}

interface RawQuestion {
  number: number;
  text: string;
  options: string[];
  answer: string;
  type: "BASIC_MULTIPLE_CHOICE" | "PASSAGE_MULTIPLE_CHOICE" | "PASSAGE_SHORT_ANSWER";
}

// 기존 두 인터페이스를 하나로 통합
interface CollectedInfo {
  character: string; // 단일 한자 또는 한자 단어
  meanings: Set<string>; // 의미 (발음 포함)
  problems: Set<string>; // 관련 문제 ID
  passages: Set<string>; // 관련 지문 ID
}

class HanjaCollector {
  private items = new Map<string, CollectedInfo>();

  // 한자 정보 추가
  addInfo(char: string, meaning: string) {
    if (!char || !meaning) return;

    // 한자가 1자 이상 포함되어 있는지 확인
    if (!/[一-龥]/.test(char)) return;

    if (!this.items.has(char)) {
      this.items.set(char, {
        character: char,
        meanings: new Set([meaning.trim()]),
        problems: new Set(),
        passages: new Set(),
      });
    } else {
      const info = this.items.get(char)!;
      info.meanings.add(meaning.trim());
    }
  }

  // 참조 관계 추가
  addReference(chars: string, problemId?: string, passageId?: string) {
    const info = this.items.get(chars);
    if (info) {
      if (problemId) info.problems.add(problemId);
      if (passageId) info.passages.add(passageId);
    }
  }

  // 한자/단어 존재 여부 확인
  hasItem(chars: string): boolean {
    return this.items.has(chars);
  }

  // 한자/단어 정보 가져오기
  getInfo(chars: string): CollectedInfo | undefined {
    return this.items.get(chars);
  }

  // 모든 항목 가져오기
  getAllItems(): [string, CollectedInfo][] {
    return Array.from(this.items.entries());
  }

  // 항목 수 가져오기
  get itemCount(): number {
    return this.items.size;
  }

  // 단일 한자와 한자 단어 구분을 위한 헬퍼 메서드
  isSingleCharacter(chars: string): boolean {
    return chars.length === 1;
  }

  // StudySet 변환을 위한 메서드
  toStudySetData(): { hanjas: HanjaCharacter[] } {
    const hanjas: HanjaCharacter[] = [];

    this.getAllItems().forEach(([chars, info]) => {
      if (info.meanings.size > 0) {
        // 의미가 있는 경우만 추가
        hanjas.push({
          id: generateHanjaId(chars),
          character: chars,
          meaning: Array.from(info.meanings).join(", "),
          reference_problem_ids: Array.from(info.problems),
          reference_passage_ids: Array.from(info.passages),
        });
      }
    });

    return { hanjas };
  }

  findHanjaInText(text: string): { hanjaIds: Set<string> } {
    const hanjaIds = new Set<string>();

    // 한자 단어 먼저 찾기 (더 긴 매칭을 우선)
    Array.from(this.items.keys())
      .sort((a, b) => b.length - a.length)
      .forEach((chars) => {
        if (text.includes(chars)) {
          Array.from(chars).forEach((char) => {
            hanjaIds.add(generateHanjaId(char));
          });
        }
      });

    return { hanjaIds };
  }
}

// ID 생성 함수들
const generateHanjaId = (characters: string): string => {
  const hexCodes = Array.from(characters)
    .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
    .join("_");
  return `HANJA_${hexCodes}`;
};

const generateProblemId = (examType: string, examNumber: string, questionNumber: number): string =>
  `PROB_${examType}_${examNumber}_${questionNumber.toString().padStart(3, "0")}`;

const generatePassageId = (examType: string, examNumber: string, passageNumber: number): string =>
  `TEXT_${examType}_${examNumber}_${passageNumber.toString().padStart(3, "0")}`;

// 한자 정보 추출 개선
const buildHanjaDatabase = (text: string): HanjaCollector => {
  const database = new HanjaCollector();

  // 한자 패턴: 한자([一-龥]+) + 공백(\s*) + 괄호와 설명(\([^)]+\))
  const hanjaPattern = /([一-龥]+)\s*\(([^)]+)\)/g;
  let match;

  while ((match = hanjaPattern.exec(text)) !== null) {
    const [_, chars, info] = match;

    database.addInfo(chars, info.trim());
  }

  return database;
};

// 선택지 파싱 함수 수정
const parseOptions = (lines: string[]): string[] => {
  if (!lines || lines.length === 0) return [];

  // 모든 선택지 줄을 하나의 문자열로 합침
  const optionText = lines.join(" ").trim();
  if (!optionText) return [];

  // "① ㉠참여     ② ㉡지원     ③ ㉢반대     ④ ㉣제한" 형식의 문자열을 분리
  const options = optionText
    .split(/[①②③④]/) // 번호로 분리
    .slice(1) // 첫 번째 빈 문자열 제거
    .map((opt) => opt.trim())
    .filter(Boolean); // 빈 문자열 제거

  return options;
};

// 문제 처리 함수 수정
const processQuestion = (lines: string[]): RawQuestion => {
  const questionText = lines[0].trim();
  const answerMatch = questionText.match(/\s(\d+)\s*$/);
  const answer = answerMatch?.[1] || "";
  const question = questionText.replace(/\s\d+\s*$/, "").trim();

  // 선택지 처리 - 모든 선택지 줄을 선택지로 처리
  const options = lines.length > 1 ? parseOptions(lines.slice(1)) : [];

  return {
    number: 0, // 나중에 설정
    text: question,
    options,
    answer,
    type: "BASIC_MULTIPLE_CHOICE", // 나중에 설정
  };
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
  // 한자와 한자 단어 정보 가져오기
  const { hanjas } = hanjaDB.toStudySetData();
  const problems: Problem[] = [];
  const passages: Passage[] = [];

  // 지문과 문제 처리
  sections.forEach((section) => {
    // 지문 처리
    let passageId: string | undefined;
    if (section.passage) {
      passageId = generatePassageId(examType, examNumber, passages.length + 1);
      const { hanjaIds } = hanjaDB.findHanjaInText(section.passage);

      passages.push({
        id: passageId,
        text: section.passage,
        hanja_ids: Array.from(hanjaIds),
        reference_problem_ids: [],
      });

      // 한자 참조 관계 업데이트
      hanjaIds.forEach((hanjaId) => {
        const hanja = hanjas.find((h) => h.id === hanjaId);
        if (hanja && !hanja.reference_passage_ids.includes(passageId!)) {
          hanja.reference_passage_ids.push(passageId!);
        }
      });
    }

    // 문제 처리
    section.questions.forEach((q) => {
      const problemId = generateProblemId(examType, examNumber, q.number);

      // 문제와 선택지에서 한자 찾기
      const allHanjaIds = new Set<string>();

      // 문제 텍스트 처리
      const questionResults = hanjaDB.findHanjaInText(q.text);
      questionResults.hanjaIds.forEach((id) => allHanjaIds.add(id));

      // 선택지 처리
      q.options.forEach((opt) => {
        const optionResults = hanjaDB.findHanjaInText(opt);
        optionResults.hanjaIds.forEach((id) => allHanjaIds.add(id));
      });

      // 문제 추가
      problems.push({
        id: problemId,
        type: q.type,
        question: q.text,
        options: q.options,
        answer: q.answer,
        reference_passage_ids: passageId ? [passageId] : [],
        hanja_ids: Array.from(allHanjaIds),
      });

      // 참조 관계 업데이트
      if (passageId) {
        const passage = passages.find((p) => p.id === passageId);
        if (passage) {
          passage.reference_problem_ids.push(problemId);
        }
      }

      // 한자 참조 관계 업데이트
      allHanjaIds.forEach((hanjaId) => {
        const hanja = hanjas.find((h) => h.id === hanjaId);
        if (hanja) {
          if (!hanja.reference_problem_ids.includes(problemId)) {
            hanja.reference_problem_ids.push(problemId);
          }
        }
      });
    });
  });

  return {
    hanjas,
    problems,
    passages,
  };
};

// 실행 부분
try {
  console.log("Starting conversion...");
  const rawText = fs.readFileSync("resources/test1.md", "utf-8");
  console.log("File read successfully");

  const hanjaDB = buildHanjaDatabase(rawText);
  const stats = hanjaDB.itemCount;
  console.log(`Built hanja database with ${stats} items`);

  const sections = parseSections(rawText);
  console.log(`Parsed ${sections.length} sections`);

  const studySet = convertToStudySet(sections, hanjaDB);
  console.log(`Converted to study set with ${studySet.hanjas.length} hanjas and ${studySet.problems.length} problems`);

  fs.writeFileSync("resources/test1.json", JSON.stringify(studySet, null, 2));
  console.log("Conversion completed successfully");
} catch (error) {
  console.error("Error during conversion:", error);
}
