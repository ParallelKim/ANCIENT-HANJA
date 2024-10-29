import { atom } from "jotai";
import { Card, CourseKey } from "../types/card";

export const currentCourseAtom = atom<CourseKey | null>(null);
export const currentCardSetAtom = atom<Card[]>([]);
export const currentIndexAtom = atom<number>(0);
export const currentCardSetLengthAtom = atom((get) => get(currentCardSetAtom).length);

export const currentCardAtom = atom((get) => {
  const currentCardSet = get(currentCardSetAtom);
  const currentIndex = get(currentIndexAtom);
  return currentCardSet[currentIndex];
});

export const currentIndexStateAtom = atom((get) => {
  const currentIndex = get(currentIndexAtom);
  const currentCardSetLength = get(currentCardSetLengthAtom);

  if (currentIndex === 0) return "first";
  if (currentIndex === currentCardSetLength - 1) return "last";
  return "middle";
});

export const moveCurrentIndexAtom = atom(null, (get, set, action: "next" | "prev" | "reset") => {
  const currentIndex = get(currentIndexAtom);
  const currentCardSetLength = get(currentCardSetLengthAtom);

  switch (action) {
    case "next":
      if (currentIndex < currentCardSetLength - 1) {
        set(currentIndexAtom, currentIndex + 1);
      }
      break;
    case "prev":
      if (currentIndex > 0) {
        set(currentIndexAtom, currentIndex - 1);
      }
      break;
    case "reset":
      set(currentIndexAtom, 0);
      break;
    default:
      break;
  }
});
