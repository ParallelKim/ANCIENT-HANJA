import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

import { currentQuestionSetLengthAtom, moveCurrentIndexAtom, userAnswersAtom } from "../stores/test";

export const CurrentTestManager = () => {
  const currentQuestionSetLength = useAtomValue(currentQuestionSetLengthAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);
  const userAnswers = useSetAtom(userAnswersAtom);

  const initRun = () => {
    userAnswers(Array(currentQuestionSetLength).fill(null));

    const keyboardListener = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Space":
          break;
        case "ArrowRight":
          moveCurrentIndex("next");
          break;
        case "ArrowLeft":
          moveCurrentIndex("prev");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", keyboardListener);
    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  };

  useEffect(initRun, [moveCurrentIndex]);

  return null;
};
