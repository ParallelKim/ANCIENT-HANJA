import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";

import { currentExamAtom, moveCurrentIndexAtom } from "../stores/test";

export const CurrentRunManager = () => {
  const [currentCardSet, setCurrentCardSet] = useAtom(currentExamAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  const initRun = () => {
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

  useEffect(initRun, [currentCardSet, moveCurrentIndex, setCurrentCardSet]);

  return null;
};
