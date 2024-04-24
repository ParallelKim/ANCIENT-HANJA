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
        <Typography>안녕하세요 또 다시 오랜만입니다!</Typography>
        <p />
        <Typography>저는 이번 시험도 패스합니다...!</Typography>
        <p />
        <Typography>여유 생기면 틈틈히 사이트는 업데이트 하겠다고 했으나</Typography>
        <Typography>마음과 몸의 여유가 부족하군요...</Typography>
        <Typography>하고 싶은 것은 참 많으나 몸이 하나라 아쉽습니다</Typography>
        <p />
        <Typography>환절기 감기 조심 미세먼지 조심 산성비 조심입니다..!</Typography>
        <Typography>특히 산성비 맞으면 머리 빠집니다.. 조심하세요!</Typography>
        <p />
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
      </Paper>
    </Box>
  );
};
