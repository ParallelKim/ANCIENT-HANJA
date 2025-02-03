export interface Section {
  range: [number, number];
  passage?: string;
  questions: RawQuestion[];
}

export interface RawQuestion {
  number: number;
  text: string;
  options: string[];
  answer: string;
  type: "BASIC_MULTIPLE_CHOICE" | "PASSAGE_MULTIPLE_CHOICE" | "PASSAGE_SHORT_ANSWER";
}

export interface CollectedInfo {
  character: string;
  meanings: Set<string>;
  problems: Set<string>;
  passages: Set<string>;
} 