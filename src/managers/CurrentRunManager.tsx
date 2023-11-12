import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { currentCardSetAtom, currentCourseAtom, moveCurrentIndexAtom } from "../stores/course";

import { shuffleArray } from "../utils";

const setSize = 20;

export const CurrentRunManager = () => {
  const [currentCardSet, setCurrentCardSet] = useAtom(currentCardSetAtom);
  const currentCourse = useAtomValue(currentCourseAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  const initRun = () => {
    // check user's study session
    if (currentCardSet.length === 0 && currentCourse) {
      const studySet = [...currentCourse.contents];
      const rand = Math.round(Math.random() * (studySet.length - setSize));

      shuffleArray(studySet);

      setCurrentCardSet(studySet.slice(rand, rand + setSize));
      moveCurrentIndex("reset");
    }

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

  useEffect(initRun, [currentCardSet, currentCardSet.length, currentCourse, moveCurrentIndex, setCurrentCardSet]);

  return null;
};
