export interface Question {
  id: number;
  share: string;
  passage?: string;
  question: string;
  answers?: string[];
}

export interface Exam {
  title: string;
  contents: Question[];
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
