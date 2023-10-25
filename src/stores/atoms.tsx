import { atom } from "jotai";
import { atomWithHash } from "jotai-location";

import { CARD } from "../types/card";

export const currentIndexAtom = atom(0);
export const moveCurrentIndexAtom = atom(
    null,
    (get, set, action: "next" | "prev") => {
        const current = get(currentIndexAtom);
        const max = get(currentCardSetLengthAtom) - 1;

        set(
            currentIndexAtom,
            action === "prev"
                ? Math.max(current - 1, 0)
                : Math.min(current + 1, max)
        );
    }
);

export const currentCardSetAtom = atom<CARD[]>([]);
export const currentCardSetLengthAtom = atom((get) => {
    return get(currentCardSetAtom).length;
});

export const currentCardAtom = atom((get) => {
    return get(currentCardSetAtom)[get(currentIndexAtom)] ?? null;
});

export const sessionIdAtom = atomWithHash<null | string>("sessionId", null);
