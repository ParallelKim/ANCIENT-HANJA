import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Exam } from "../types/test";

export const currentExamAtom = atomWithStorage<Exam | null>("exam data", null);
export const currentQuestionSetAtom = atom((get) => {
  return get(currentExamAtom)?.contents ?? { exam: [] };
});
export const currentQuestionSetLengthAtom = atom((get) => {
  return get(currentQuestionSetAtom)?.exam?.length ?? 0;
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
  return get(currentQuestionSetAtom).exam[get(currentExamIndexAtom)] ?? null;
});

export const currentShareAtom = atom((get) => {
  return get(currentExamAtom)?.contents.shareList[get(currentQuestionAtom).share] ?? null;
});

export const currentPassageAtom = atom((get) => {
  const exam = get(currentExamAtom);
  if (!exam) return null;

  const { passage } = get(currentQuestionAtom);
  if (!passage) return null;

  const res = exam.contents.passageList[passage];
  if (!res) return null;

  return res;
});

export const answerableAtom = atom((get) => {
  return get(currentQuestionAtom)?.answers ?? null;
});

export const currentIndexStateAtom = atom((get) => {
  if (get(currentExamIndexAtom) >= get(currentQuestionSetLengthAtom) - 1) return "last";
  if (get(currentExamIndexAtom) <= 0) return "first";
  return "inside";
});

export const userAnswersAtom = atomWithStorage<(string | number | null)[]>("user answer", []);
export const currentUserAnswerAtom = atom((get) => {
  return get(userAnswersAtom)[get(currentExamIndexAtom)] ?? null;
});

export const inputAnswerAtom = atom(null, (get, set, value: string | number) => {
  const current = get(currentExamIndexAtom);

  const temp = get(userAnswersAtom);

  temp[current] = value ?? null;

  if (value) {
    set(moveCurrentIndexAtom, "next");
  }

  set(userAnswersAtom, temp);
});

export const lastResultAtom = atomWithStorage<
  { id: number; correct: boolean; Q: string; A: string | number; U: string | number }[] | null
>("last result", null);

export const gradeUserAnswerAtom = atom(null, (get, set) => {
  const userAnswers = get(userAnswersAtom);
  const realAnswers = get(currentExamAtom);

  if (!realAnswers) return;

  const temp = realAnswers.answers.map((ans, idx) => {
    return {
      id: idx,
      correct: ans === userAnswers[idx],
      Q: get(currentQuestionSetAtom).exam[idx].question,
      A: ans,
      U: userAnswers[idx] ?? "",
    };
  });

  console.log(temp);

  set(lastResultAtom, temp);
});

export const resetUserAnswerAtom = atom(null, (get, set) => {
  const len = get(currentQuestionSetLengthAtom);

  const temp = Array(len).fill(null);

  set(userAnswersAtom, temp);
});
