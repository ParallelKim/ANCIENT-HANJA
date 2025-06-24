import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Typography variant="h5" fontWeight={700}>
          고대한자(베타)
        </Typography>
        {/* <Typography variant="h6">업데이트 내역</Typography> */}
        <p />
        <Typography>안녕하세요</Typography>
        <p />
        <Typography>여름과 함께 81회 한자시험이 다가오네요!</Typography>
        <Typography>일교차가 심합니다 모두 감기 조심하세요</Typography>
        <p />
        <Typography>시험 준비하시는 분들 모두 파이팅입니다</Typography>
        <Typography>이번 시험에 합격해 졸업으로 한 발 다가가기를 바라요</Typography>
        <p />
        <Typography>오늘도 좋은 하루 되세요</Typography>
        <p />
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
      </Paper>
    </Box>
  );
};
