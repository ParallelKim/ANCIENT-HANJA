export interface Question {
  id: string;
  front: string;
  back: string;
}

export interface Exam {
  title: string;
  contents: Question[];
}
