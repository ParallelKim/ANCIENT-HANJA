export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Course {
  title: string;
  contents: Card[];
}
