import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Typography variant="h5" fontWeight={700}>
          고대한자(베타)
        </Typography>
        {/* <Typography variant="h6">업데이트 내역</Typography> */}
        <Typography>다들 시험 잘 보셨나요?</Typography>
        <p />
        <Typography>내일은 한자 시험 결과 발표일입니다</Typography>
        <Typography>저는 통과 못하지 싶어요 ㅋㅋㅋ</Typography>
        <p />
        <Typography>주말 잘 보내시고 내일 아침 9시에 좋은 결과 확인하시면 좋겠네요</Typography>
        <Typography>그동안 부족한 서비스 이용해주셔서 감사드립니다</Typography>
        <p />
        <Typography>모든 문의 환영입니다 아래 링크로 편하게 연락 주세요</Typography>
      </Paper>
    </Box>
  );
};
