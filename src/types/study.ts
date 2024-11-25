export interface HanjaCharacter {
  id: string;
  character: string;
  meaning: string;
  annotation?: string;
  reference_passage_ids: string[];
  reference_problem_ids: string[];
}

export type QuestionType = "BASIC_MULTIPLE_CHOICE" | "PASSAGE_MULTIPLE_CHOICE" | "PASSAGE_SHORT_ANSWER";

export interface Problem {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  answer: string;
  reference_passage_ids: string[];
  hanja_ids: string[];
}

export interface Passage {
  id: string;
  text: string;
  annotated_text?: string;
  hanja_ids: string[];
  reference_problem_ids: string[];
}

export interface StudySet {
  hanjas: HanjaCharacter[];
  problems: Problem[];
  passages: Passage[];
}
