import { STUDY_DATA } from "../constants/studyData";
import { HanjaCharacter, Passage, Problem } from "../types/study";

export const getHanjaById = (id: string): HanjaCharacter | undefined => {
  return STUDY_DATA.hanjas.find((h) => h.id === id);
};

export const getRelatedProblems = (hanjaId: string): Problem[] => {
  return STUDY_DATA.problems.filter((p) => p.hanja_ids.includes(hanjaId));
};

export const getRelatedPassages = (hanjaId: string): Passage[] => {
  return STUDY_DATA.passages.filter((p) => p.hanja_ids.includes(hanjaId));
};

export const createStudySet = (size: number = 20) => {
  const hanjas = [...STUDY_DATA.hanjas];
  const shuffled = hanjas.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};
