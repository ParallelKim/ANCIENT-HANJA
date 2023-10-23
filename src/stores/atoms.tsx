import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { CARD } from "../types/card";

export const currentIndexAtom = atom(0);
export const currentCardSetAtom = atom<CARD[]>([]);
export const currentCardSetLengthAtom = atom((get) => {
    return get(currentCardSetAtom).length;
});

export const sessionIdAtom = atomWithHash<null | string>("sessionId", null);
