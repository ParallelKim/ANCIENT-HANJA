import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";

export const hashIdAtom = atomWithHash<null | string>("uid", null);
export const userInfoAtom = atom<null | unknown>(null);

export const isNotiOnAtom = atomWithStorage<boolean | undefined>("isNotiOn", undefined);
export const msgTokenAtom = atom<null | string>(null);
