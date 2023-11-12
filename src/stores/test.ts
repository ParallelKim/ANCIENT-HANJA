import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Exam } from "../types/test";

export const currentExamAtom = atomWithStorage<Exam | null>("exam data", null);
export const currentQuestionSetAtom = atom((get) => {
  return get(currentExamAtom)?.contents ?? [];
});
export const currentQuestionSetLengthAtom = atom((get) => {
  return get(currentQuestionSetAtom).length;
});

export const currentExamIndexAtom = atomWithStorage("current index for exam", 0);
export const moveCurrentIndexAtom = atom(null, (get, set, action: "next" | "prev" | "reset") => {
  const current = get(currentExamIndexAtom);
  const max = get(currentQuestionSetLengthAtom) - 1;

  switch (action) {
    case "next":
      set(currentExamIndexAtom, Math.min(current + 1, max));
      break;
    case "prev":
      set(currentExamIndexAtom, Math.max(current - 1, 0));
      break;
    case "reset":
      set(currentExamIndexAtom, 0);
      break;
    default:
      break;
  }
});

export const currentQuestionAtom = atom((get) => {
  return get(currentQuestionSetAtom)[get(currentExamIndexAtom)] ?? null;
});

export const currentIndexStateAtom = atom((get) => {
  if (get(currentExamIndexAtom) >= get(currentQuestionSetLengthAtom) - 1) return "last";
  if (get(currentExamIndexAtom) <= 0) return "first";
  return "inside";
});
