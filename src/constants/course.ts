import previous30 from "../assets/previous-30.json";
import previous40 from "../assets/previous-40.json";
import previous50 from "../assets/previous-50.json";
import chars1 from "../assets/chars1.json";
import chars2 from "../assets/chars2.json";
import words1 from "../assets/words1.json";
import words2 from "../assets/words2.json";

export const CATEGORIES = [
  {
    label: "기출문제 회차 별",
    list: [
      { title: "30회", contents: previous30 },
      { title: "40회", contents: previous40 },
      { title: "50회", contents: previous50 },
    ],
  },
  {
    label: "종합 한자",
    list: [
      { title: "한자 1", contents: chars1 },
      { title: "한자 2", contents: chars2 },
    ],
  },
  {
    label: "종합 단어",
    list: [
      { title: "단어 1", contents: words1 },
      { title: "단어 2", contents: words2 },
    ],
  },
];
