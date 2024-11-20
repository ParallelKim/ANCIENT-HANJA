import { StudySet } from "../types/study";

export const STUDY_DATA: StudySet = {
  hanjas: [
    {
      id: "HANJA_8C9E",
      character: "諾",
      pronunciation: "낙",
      meaning: "허락할",
      reference_passage_ids: ["TEXT_BASIC_001_001"],
      reference_problem_ids: ["PROB_BASIC_001_001"],
    },
  ],
  hanja_words: [],
  problems: [
    {
      id: "PROB_BASIC_001_001",
      type: "BASIC_MULTIPLE_CHOICE",
      question: "'決定'의 올바른 뜻은?",
      options: ["결정"],
      answer: "1",
      reference_passage_ids: ["TEXT_BASIC_001_001"],
      hanja_ids: ["HANJA_8C9E"],
      hanja_word_ids: [],
    },
  ],
  passages: [
    {
      id: "TEXT_BASIC_001_001",
      text: "교육의 공간적 정의로 분류하자면...",
      annotated_text: "교육의 공간적 정의(定義)로 분류(分類)하자면...",
      hanja_ids: ["HANJA_8C9E"],
      hanja_word_ids: [],
      reference_problem_ids: ["PROB_BASIC_001_001"],
    },
  ],
};
