export const NOTICE_LINK = "https://kuhjhm.korea.ac.kr/hjhm/exam/notice.do?mode=view&articleNo=334950";

export const GOOGLE_CALENDER = "https://calendar.google.com/calendar/u/0/r?cid=YW5jaWVudC5oYW5qYUBnbWFpbC5jb20";
export const OPEN_KAKAO = "https://open.kakao.com/o/sZYA1uOf";
export const INSTAGRAM = "https://www.instagram.com/ancient_hanja";
export const GITHUB = "https://github.com/ParallelKim/ANCIENT-HANJA";
export const HANJA_SEARCH = "https://hanja.dict.naver.com/#/search?query=";

export const QUIZLET_BASE = "https://quizlet.com/kr";
export const QUIZLET: { [key: string]: string } = {
  "기출 50회": "/659383641/고려대-한자-기출-50회-flash-cards/",
  "기출 40회": "/659387601/고려대-한자-기출-40회-flash-cards/",
  "기출 30회": "/659383455/고려대-한자-기출-30회-flash-cards/",
  "한자 데이터 1": "/802668244/고려대학교-한자시험-flash-cards/",
  "단어 데이터 2": "/216112185/고려대학교-한자시험-flash-cards/",
  "단어 데이터 3": "/177828443/고려대학교-졸업한자-flash-cards/",
};

export const CALCULATOR_FONT = "https://www.bvfonts.com/fonts/details.php?id=18";
export const KAKAO_ICON = "https://marshall-ku.tistory.com/204";

export const CREDITS = [
  ...Object.keys(QUIZLET).map((quiz) => ({
    label: quiz,
    url: QUIZLET_BASE + QUIZLET[quiz],
  })),
  { label: "계산기 폰트", url: CALCULATOR_FONT },
  { label: "카카오 아이콘", url: KAKAO_ICON },
];
