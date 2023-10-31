import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
    currentCardSetAtom,
    currentClassAtom,
    moveCurrentIndexAtom,
} from "../stores/atoms";
import { useEffect } from "react";

import { shuffleArray } from "../utils";

const setSize = 20;

export const CurrentRunManager = () => {
    const [currentCardSet, setCurrentCardSet] = useAtom(currentCardSetAtom);
    const currentClass = useAtomValue(currentClassAtom);
    const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

    const initRun = () => {
        // check user's study session

        if (currentCardSet.length === 0) {
            const studySet = [...currentClass];
            const rand = Math.round(
                Math.random() * (studySet.length - setSize)
            );

            shuffleArray(studySet);

            setCurrentCardSet(studySet.slice(rand, rand + setSize));
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

    useEffect(initRun, [
        currentCardSet.length,
        currentClass,
        moveCurrentIndex,
        setCurrentCardSet,
    ]);

    return null;
};