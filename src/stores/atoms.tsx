import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";

import { Card, Course } from "../types/card";

export const currentCourseAtom = atom<Course | null>(null);

export const currentCardSetAtom = atomWithStorage<Card[]>("current card set", []);
export const currentCardSetLengthAtom = atom((get) => {
  return get(currentCardSetAtom).length;
});

export const currentIndexAtom = atomWithStorage("current index", 0);
export const moveCurrentIndexAtom = atom(null, (get, set, action: "next" | "prev") => {
  const current = get(currentIndexAtom);
  const max = get(currentCardSetLengthAtom) - 1;

  set(currentIndexAtom, action === "prev" ? Math.max(current - 1, 0) : Math.min(current + 1, max));
});

export const currentCardAtom = atom((get) => {
  return get(currentCardSetAtom)[get(currentIndexAtom)] ?? null;
});

export const hashIdAtom = atomWithHash<null | string>("uid", null);
export const userInfoAtom = atom<null | unknown>(null);

export const isNotiOnAtom = atomWithStorage<boolean | undefined>("isNotiOn", undefined);
export const msgTokenAtom = atom<null | string>(null);
