import fs from "fs";
import { HanjaCharacter, HanjaWord, Passage, Problem, StudySet } from "../types/study";

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

interface CollectedHanjaInfo {
  character: string;
  meanings: Set<string>;
  pronunciations: Set<string>;
  problems: Set<string>;
  passages: Set<string>;
}

interface CollectedWordInfo {
  characters: string;
  meanings: Set<string>;
  pronunciations: Set<string>;
  problems: Set<string>;
  passages: Set<string>;
}

// 한자 정보를 수집하고 관리하는 클래스
class HanjaCollector {
  private singles = new Map<string, CollectedHanjaInfo>();
  private words = new Map<string, CollectedWordInfo>();

  // 한자 정보 추가 (의미나 발음이 있는 경우에만 추가)
  addHanjaInfo(char: string, meaning: string, pronunciation: string) {
    if (!meaning && !pronunciation) return;

    if (!this.singles.has(char)) {
      this.singles.set(char, {
        character: char,
        meanings: new Set(meaning ? [meaning] : []),
        pronunciations: new Set(pronunciation ? [pronunciation] : []),
        problems: new Set(),
        passages: new Set(),
      });
    } else {
      const info = this.singles.get(char)!;
      if (meaning) info.meanings.add(meaning);
      if (pronunciation) info.pronunciations.add(pronunciation);
    }
  }

  // 참조 관계 추가
  addReference(char: string, problemId?: string, passageId?: string) {
    const info = this.singles.get(char);
    if (info) {
      if (problemId) info.problems.add(problemId);
      if (passageId) info.passages.add(passageId);
    }
  }

  // 한자 단어 정보 추가 (의미나 발음이 있는 경우에만 추가)
  addWordInfo(chars: string, meanings: string[], pronunciations: string[]) {
    if (!meanings.some(Boolean) && !pronunciations.some(Boolean)) return;

    if (!this.words.has(chars)) {
      this.words.set(chars, {
        characters: chars,
        meanings: new Set(meanings.filter(Boolean)),
        pronunciations: new Set(pronunciations.filter(Boolean)),
        problems: new Set(),
        passages: new Set(),
      });

      // 단어를 구성하는 각 한자의 정보도 추가
      Array.from(chars).forEach((char, idx) => {
        if (meanings[idx] || pronunciations[idx]) {
          this.addHanjaInfo(char, meanings[idx], pronunciations[idx]);
        }
      });
    }
  }

  // 한자 존재 여부 확인
  hasHanja(char: string): boolean {
    return this.singles.has(char);
  }

  // 한자 단어 존재 여부 확인
  hasWord(chars: string): boolean {
    return this.words.has(chars);
  }

  // 한자 정보 가져오기
  getHanjaInfo(char: string): CollectedHanjaInfo | undefined {
    return this.singles.get(char);
  }

  // 한자 단어 정보 가져오기
  getWordInfo(chars: string): CollectedWordInfo | undefined {
    return this.words.get(chars);
  }

  // 모든 한자 가져오기
  getAllHanjas(): [string, CollectedHanjaInfo][] {
    return Array.from(this.singles.entries());
  }

  // 모든 한자 단어 가져오기
  getAllWords(): [string, CollectedWordInfo][] {
    return Array.from(this.words.entries());
  }

  // 한자 수 가져오기
  get hanjasCount(): number {
    return this.singles.size;
  }

  // 한자 단어 수 가져오기
  get wordsCount(): number {
    return this.words.size;
  }

  // 한자 정보 추출을 위한 public 메서드들
  extractHanjaFromText(text: string): { hanjaIds: Set<string>; wordIds: Set<string> } {
    const hanjaIds = new Set<string>();
    const wordIds = new Set<string>();

    // 한자 단어 먼저 찾기 (더 긴 매칭을 우선)
    Array.from(this.words.keys())
      .sort((a, b) => b.length - a.length)
      .forEach((chars) => {
        if (text.includes(chars)) {
          const wordId = `WORD_${chars}`;
          wordIds.add(wordId);
          Array.from(chars).forEach((char) => {
            hanjaIds.add(generateHanjaId(char));
          });
        }
      });

    // 개별 한자 찾기
    Array.from(this.singles.keys()).forEach((char) => {
      if (text.includes(char)) {
        const hanjaId = generateHanjaId(char);
        // 이미 단어의 일부로 처리된 한자는 제외
        const isPartOfWord = Array.from(wordIds).some((wordId) => {
          const chars = wordId.replace("WORD_", "");
          return chars.includes(char);
        });
        if (!isPartOfWord) {
          hanjaIds.add(hanjaId);
        }
      }
    });

    return { hanjaIds, wordIds };
  }

  // 한자 정보를 StudySet 형식으로 변환하는 메서드 추가
  toStudySetData(): { hanjas: HanjaCharacter[]; hanja_words: HanjaWord[] } {
    const hanjas: HanjaCharacter[] = [];
    const hanja_words: HanjaWord[] = [];

    // 한자 변환
    this.getAllHanjas().forEach(([char, info]) => {
      hanjas.push({
        id: generateHanjaId(char),
        character: char,
        meaning: Array.from(info.meanings).join(", "),
        pronunciation: Array.from(info.pronunciations).join(", "),
        reference_problem_ids: Array.from(info.problems),
        reference_passage_ids: Array.from(info.passages),
      });
    });

    // 한자 단어 변환
    this.getAllWords().forEach(([chars, info]) => {
      hanja_words.push({
        id: `WORD_${chars}`,
        characters: chars,
        meaning: Array.from(info.meanings).join(", "),
        pronunciation: Array.from(info.pronunciations).join(", "),
        hanja_ids: Array.from(chars).map(generateHanjaId),
      });
    });

    return { hanjas, hanja_words };
  }

  // 텍스트에서 한자 찾기
  findHanjaInText(text: string): { hanjaIds: Set<string>; wordIds: Set<string> } {
    const hanjaIds = new Set<string>();
    const wordIds = new Set<string>();

    // 한자 단어 먼저 찾기 (더 긴 매칭을 우선)
    this.getAllWords()
      .map(([chars]) => chars)
      .sort((a, b) => b.length - a.length)
      .forEach((chars) => {
        if (text.includes(chars)) {
          const wordId = `WORD_${chars}`;
          wordIds.add(wordId);
          Array.from(chars).forEach((char) => {
            hanjaIds.add(generateHanjaId(char));
          });
        }
      });

    // 개별 한자 찾기
    this.getAllHanjas().forEach(([char]) => {
      if (text.includes(char)) {
        const hanjaId = generateHanjaId(char);
        // 이미 단어의 일부로 처리된 한자는 제외
        const isPartOfWord = Array.from(wordIds).some((wordId) => {
          const chars = wordId.replace("WORD_", "");
          return chars.includes(char);
        });
        if (!isPartOfWord) {
          hanjaIds.add(hanjaId);
        }
      }
    });

    return { hanjaIds, wordIds };
  }

  // 디버깅용 메서드
  get stats() {
    return {
      singlesCount: this.singles.size,
      wordsCount: this.words.size,
    };
  }

  // 한자 존재 여부 확인 메서드 추가
  hasSingleHanja(char: string): boolean {
    return this.singles.has(char);
  }
}

// ID 생성 함수들
const generateHanjaId = (character: string): string => `HANJA_${character.charCodeAt(0).toString(16).toUpperCase()}`;

const generateProblemId = (examType: string, examNumber: string, questionNumber: number): string =>
  `PROB_${examType}_${examNumber}_${questionNumber.toString().padStart(3, "0")}`;

const generatePassageId = (examType: string, examNumber: string, passageNumber: number): string =>
  `TEXT_${examType}_${examNumber}_${passageNumber.toString().padStart(3, "0")}`;

// 한자 정보 추출 순서 재정의
const buildHanjaDatabase = (text: string): HanjaCollector => {
  const database = new HanjaCollector();

  // 1. 문제 본문의 한자 패턴 (가장 정확한 정보)
  const problemPattern = /\d+\.\s*([一-龥])\s*\(([^)]+)\)/g;
  let match;
  while ((match = problemPattern.exec(text)) !== null) {
    const [_, char, info] = match;
    const parts = info.trim().split(/\s+/);
    const pronunciation = parts.pop() || "";
    const meaning = parts.join(" ");
    database.addHanjaInfo(char, meaning, pronunciation);
  }

  // 2. 성어 패턴 (예: 愚公移山 (어리석을 우, 공평할 공, 옮길 이, 산 산: 우공이 산을 옮긴다))
  const idiomPattern = /([一-龥]{4})\s*\(([^:]+):\s*([^)]+)\)/g;
  while ((match = idiomPattern.exec(text)) !== null) {
    const [_, chars, info, meaning] = match;
    const parts = info.split(",").map((p) => p.trim());
    if (parts.length === chars.length) {
      const meanings: string[] = [];
      const pronunciations: string[] = [];
      parts.forEach((part) => {
        const words = part.split(/\s+/);
        pronunciations.push(words.pop() || "");
        meanings.push(words.join(" "));
      });
      database.addWordInfo(chars, meanings, pronunciations);
    }
  }

  // 3. 한자 단어 패턴 (예: 參與 (참여할 참, 더불 여))
  const wordPattern = /([一-龥]{2,})\s*\(([^)]+)\)/g;
  text = text.replace(idiomPattern, ""); // 이미 처리된 성어 제거
  while ((match = wordPattern.exec(text)) !== null) {
    const [_, chars, info] = match;
    const parts = info.split(",").map((p) => p.trim());
    if (parts.length === chars.length) {
      const meanings: string[] = [];
      const pronunciations: string[] = [];
      parts.forEach((part) => {
        const words = part.split(/\s+/);
        pronunciations.push(words.pop() || "");
        meanings.push(words.join(" "));
      });
      database.addWordInfo(chars, meanings, pronunciations);
    }
  }

  // 4. 지문의 한자 패턴 (보충 정보)
  const passagePattern = /([一-龥])\(([^)]+)\)/g;
  text = text.replace(wordPattern, ""); // 이미 처리된 단어 제거
  while ((match = passagePattern.exec(text)) !== null) {
    const [_, char, info] = match;
    const words = info.trim().split(/\s+/);
    const pronunciation = words.pop() || "";
    const meaning = words.join(" ");
    if (!database.hasSingleHanja(char)) {
      database.addHanjaInfo(char, meaning, pronunciation);
    }
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
  const { hanjas, hanja_words } = hanjaDB.toStudySetData();
  const problems: Problem[] = [];
  const passages: Passage[] = [];

  // 지문과 문제 처리
  sections.forEach((section) => {
    // 지문 처리
    let passageId: string | undefined;
    if (section.passage) {
      passageId = generatePassageId(examType, examNumber, passages.length + 1);
      const { hanjaIds, wordIds } = hanjaDB.findHanjaInText(section.passage);

      passages.push({
        id: passageId,
        text: section.passage,
        hanja_ids: Array.from(hanjaIds),
        hanja_word_ids: Array.from(wordIds),
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
      const allWordIds = new Set<string>();

      // 문제 텍스트 처리
      const questionResults = hanjaDB.findHanjaInText(q.text);
      questionResults.hanjaIds.forEach((id) => allHanjaIds.add(id));
      questionResults.wordIds.forEach((id) => allWordIds.add(id));

      // 선택지 처리
      q.options.forEach((opt) => {
        const optionResults = hanjaDB.findHanjaInText(opt);
        optionResults.hanjaIds.forEach((id) => allHanjaIds.add(id));
        optionResults.wordIds.forEach((id) => allWordIds.add(id));
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
        hanja_word_ids: Array.from(allWordIds),
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
    hanja_words,
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
  const stats = hanjaDB.stats;
  console.log(`Built hanja database with ${stats.singlesCount} singles and ${stats.wordsCount} words`);

  const sections = parseSections(rawText);
  console.log(`Parsed ${sections.length} sections`);

  const studySet = convertToStudySet(sections, hanjaDB);
  console.log(`Converted to study set with ${studySet.hanjas.length} hanjas and ${studySet.problems.length} problems`);

  fs.writeFileSync("resources/test1.json", JSON.stringify(studySet, null, 2));
  console.log("Conversion completed successfully");
} catch (error) {
  console.error("Error during conversion:", error);
}
