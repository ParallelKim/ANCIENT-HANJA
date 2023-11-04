import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Typography variant="h5" fontWeight={700}>
          고대한자(베타)
        </Typography>
        <Typography variant="h6">업데이트 내역</Typography>
        <Typography>1. 일정 알림 기능 추가</Typography>
        <Typography>2. 기출 문제 별 데이터 추가</Typography>
        <Typography>3. 소소한 디자인 업데이트</Typography>
        <p />
        <Typography>기능 요청, 버그 제보, 팀 참여 희망, 커피챗 등</Typography>
        <Typography>모든 문의 환영입니다 편하게 연락 주세요</Typography>
        <p />
        <Typography>다들 한자 시험 파이팅입니다</Typography>
      </Paper>
    </Box>
  );
};
