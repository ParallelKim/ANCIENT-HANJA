import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Typography variant="h5" fontWeight={700}>
          고대한자(베타)
        </Typography>
        <Typography variant="h6">업데이트 내역</Typography>
        <Typography>모의시험 기능을 드디어 업데이트 했습니다...</Typography>
        <p />
        <Typography>
          기능 자체는 완성했지만 아직 기출문제들을 정리하지 못해 모든 데이터가 들어가진 못한 상태입니다
        </Typography>
        <Typography>30 ~ 10회도 어서 추가해드릴게요..</Typography>
        <p />
        <Typography>기능 요청, 버그 제보, 팀 참여 희망, 커피챗 등</Typography>
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
        <p />
        <Typography>다들 끝까지 한자 시험 파이팅입니다</Typography>
      </Paper>
    </Box>
  );
};
