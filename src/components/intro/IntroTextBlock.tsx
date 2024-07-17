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
        <Typography>2번의 시험을 건너뛰고 나서 드디어 시험을 보게 되었네요</Typography>
        <p />
        <Typography>잠깐 휴직을 하며 졸업 준비를 하려 합니다</Typography>
        <Typography>이번에는 시험 공부를 하며 짬이 날 때마다 사이트도 업데이트 해보겠습니다</Typography>
        <p />
        <Typography>폭염과 폭우 조심하세요!!</Typography>
        <Typography>다들 좋은 결과 있었으면 좋겠습니다</Typography>
        <p />
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
      </Paper>
    </Box>
  );
};
