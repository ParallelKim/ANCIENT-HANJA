import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Course, Card } from "../types/card";

export const currentCourseAtom = atom<Course | null>(null);

export const currentCardSetAtom = atomWithStorage<Card[]>("current card set", []);
export const currentCardSetLengthAtom = atom((get) => {
  return get(currentCardSetAtom).length;
});

export const currentIndexAtom = atomWithStorage("current index", 0);
export const moveCurrentIndexAtom = atom(null, (get, set, action: "next" | "prev" | "reset") => {
  const current = get(currentIndexAtom);
  const max = get(currentCardSetLengthAtom) - 1;

  switch (action) {
    case "next":
      set(currentIndexAtom, Math.min(current + 1, max));
      break;
    case "prev":
      set(currentIndexAtom, Math.max(current - 1, 0));
      break;
    case "reset":
      set(currentIndexAtom, 0);
      break;
    default:
      break;
  }
});

export const currentCardAtom = atom((get) => {
  return get(currentCardSetAtom)[get(currentIndexAtom)] ?? null;
});

export const currentIndexStateAtom = atom((get) => {
  if (get(currentIndexAtom) >= get(currentCardSetLengthAtom) - 1) return "last";
  if (get(currentIndexAtom) <= 0) return "first";
  return "inside";
});
