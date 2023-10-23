import { useAtom } from "jotai";
import { currentCardSetAtom } from "../stores/atoms";
import { useEffect } from "react";

import chars from "../constants/chars.json";
import { shuffleArray } from "../utils";

export const CurrentRunManager = () => {
    const [currentCardSet, setCurrentCardSet] = useAtom(currentCardSetAtom);

    const initRun = () => {
        if (currentCardSet.length > 0) {
            console.log("currentCardSet", currentCardSet);
            return;
        }

        const rand = Math.round(Math.random() * (chars.length - 20));

        shuffleArray(chars);

        setCurrentCardSet(
            chars
                .slice(rand, rand + 20)
                .map((c, i) => ({ id: i, front: c.한자, back: c.뜻 }))
        );
    };

    useEffect(initRun, [currentCardSet, setCurrentCardSet]);

    return null;
};
