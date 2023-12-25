import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Typography variant="h5" fontWeight={700}>
          고대한자(베타)
        </Typography>
        {/* <Typography variant="h6">업데이트 내역</Typography> */}
        <Typography>안녕하세요 오랜만입니다.</Typography>
        <Typography>요새 너무 바빠서 일정 업데이트를 빨리 못해드렸네요</Typography>
        <p />
        <Typography>역시나 저번 시험에 떨어져서 한 번 더 봐야 하는 상황인데</Typography>
        <Typography>당분간은 바쁠 것 같아 이번 시험은 패스하려고요</Typography>
        <p />
        <Typography>여유 생기면 틈틈히 사이트는 업데이트 하겠습니다</Typography>
        <Typography>날이 많이 추운데 감기 조심하시고 행복한 연말 보내세용</Typography>
        <p />
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
      </Paper>
    </Box>
  );
};
