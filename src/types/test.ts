export interface Question {
  id: number;
  share: number;
  passage?: number;
  question: string;
  answers?: string[];
}

export interface Exam {
  title: string;
  contents: { exam: Question[]; shareList: string[]; passageList: string[] };
  answers: (number | string)[];
}

export interface MultipleChoice {
  type: "multipleChoice";
  share: string;
  questions: { Q: string; A: string[] }[];
}

export interface WithPassage {
  type: "withPassage";
  share: string;
  passage: string;
  questions: { Q: string; A: string[] }[];
}

export interface ShortAnswer {
  type: "shortAnswer";
  share: string;
  questions: { P: string; Q: string }[];
}

export type RawExamData = (MultipleChoice | WithPassage | ShortAnswer)[];

export interface ExamResult {
  id: number;
  correct: boolean;
  S: string;
  P: string | null;
  Q: string;
  A: string | number;
  U: string | number | null;
}
