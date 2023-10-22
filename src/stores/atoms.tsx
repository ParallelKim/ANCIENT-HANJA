import { atom } from "jotai";
import { atomWithHash } from "jotai-location";

export const currentIndexAtom = atom(0);

export const sessionIdAtom = atomWithHash<null | string>("sessionId", null);
