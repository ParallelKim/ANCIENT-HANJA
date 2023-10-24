import { useAtom, useSetAtom } from "jotai";
import { currentCardSetAtom, moveCurrentIndexAtom } from "../stores/atoms";
import { useEffect } from "react";

import chars from "../assets/chars.json";
import { shuffleArray } from "../utils";

export const CurrentRunManager = () => {
    const [currentCardSet, setCurrentCardSet] = useAtom(currentCardSetAtom);
    const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

    const initRun = () => {
        if (currentCardSet.length === 0) {
            const rand = Math.round(Math.random() * (chars.length - 20));

            shuffleArray(chars);

            setCurrentCardSet(
                chars
                    .slice(rand, rand + 20)
                    .map((c, i) => ({ id: i, front: c.한자, back: c.뜻 }))
            );
        }

        const keyboardListener = (e: KeyboardEvent) => {
            console.log(e);
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

    useEffect(initRun, [currentCardSet, setCurrentCardSet]);

    return null;
};
