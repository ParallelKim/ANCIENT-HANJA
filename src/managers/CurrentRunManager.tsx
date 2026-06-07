import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { currentCardSetAtom, currentCourseAtom, moveCurrentIndexAtom } from "../stores/course";

import { shuffleArray } from "../utils";
import { COURSE } from "../constants/course";

const setSize = 20;

export const CurrentRunManager = () => {
  const [currentCardSet, setCurrentCardSet] = useAtom(currentCardSetAtom);
  const currentCourse = useAtomValue(currentCourseAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  const initRun = () => {
    // check user's study session
    if (currentCardSet.length === 0 && currentCourse) {
      const currentCourseObject = COURSE[currentCourse];
      if (!currentCourseObject) {
        console.log("없는디", currentCourse);
        return;
      }
      // shuffleArray는 원본을 변경하지 않고 새 배열을 반환하므로 반환값을 사용해야 함
      const shuffled = shuffleArray([...currentCourseObject]);
      const rand = Math.round(Math.random() * (shuffled.length - setSize));

      setCurrentCardSet(shuffled.slice(rand, rand + setSize));
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
