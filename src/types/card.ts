import { COURSE } from "../config/constants/course";

export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Course {
  title: string;
  contents: Card[];
}

export type CourseKey = keyof typeof COURSE;
