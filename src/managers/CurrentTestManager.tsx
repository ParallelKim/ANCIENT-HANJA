import { useSetAtom } from "jotai";
import { useEffect } from "react";

import { moveCurrentIndexAtom, resetUserAnswerAtom } from "../stores/test";

export const CurrentTestManager = () => {
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);
  const resetUserAnswer = useSetAtom(resetUserAnswerAtom);

  const initRun = () => {
    resetUserAnswer();

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

  useEffect(initRun, [moveCurrentIndex, resetUserAnswer]);

  return null;
};
