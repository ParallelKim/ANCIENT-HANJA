import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Exam, ExamResult } from "../types/test";

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

export const lastResultAtom = atomWithStorage<{ passage: string[]; res: { [key: string]: ExamResult[] } } | null>(
  "last result",
  null,
);

export const gradeUserAnswerAtom = atom(null, (get, set) => {
  const userAnswers = get(userAnswersAtom);
  const realAnswers = get(currentExamAtom);
  const { shareList, passageList } = get(currentExamAtom)?.contents ?? { shareList: [], passageList: [] };

  if (!realAnswers) return;

  const passages = ["empty"];
  const res: { [key: string]: ExamResult[] } = {
    empty: [],
  };

  realAnswers.answers.forEach((ans, idx) => {
    const { share, passage, question, answers } = get(currentQuestionSetAtom).exam[idx];
    const userAnswer = userAnswers[idx];

    const innerTemp: ExamResult = {
      id: idx,
      correct: ans === userAnswer,
      S: shareList[share],
      P: null,
      Q: question,
      A: ans,
      U: userAnswer,
    };

    if (answers && typeof ans === "number" && typeof userAnswer === "number") {
      innerTemp.A = answers[ans];
      innerTemp.U = answers[userAnswer];
    }

    if (passage) {
      const P = passageList[passage];

      passages.push(P);
      res[P] = res[P] ?? [];
      innerTemp.P = P;
      res[P].push(innerTemp);
    } else {
      res.empty.push(innerTemp);
    }
  });

  const tempP = [...new Set(passages)];

  set(lastResultAtom, {
    passage: tempP,
    res,
  });

  console.log({
    passage: tempP,
    res,
  });
});

export const resetUserAnswerAtom = atom(null, (get, set) => {
  const len = get(currentQuestionSetLengthAtom);

  const temp = Array(len).fill(null);

  set(userAnswersAtom, temp);
  set(currentExamIndexAtom, 0);
  set(currentExamAtom, null);
});
