import { Box, Button, Container, Divider, Link, Paper, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpPage = () => {
  return (
    <Container
      id="sign-up-page"
      sx={{
        height: "100%",
        my: 2,
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            소셜 로그인
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography sx={{ mb: "1rem", wordBreak: "keep-all" }}>
            학습 진행도를 안정적으로 저장하기 위해 소셜 로그인을 진행하시겠습니까?
          </Typography>
          <Typography sx={{ mb: "1rem", wordBreak: "keep-all" }}>
            로그인 없이도 진행도가 저장되고, 모든 기능을 이용할 수 있지만 안정성을 위해 로그인을 권장합니다.
          </Typography>
          <Typography sx={{ mb: "1rem", wordBreak: "keep-all" }}>
            지금 로그인하지 않더라도 상단의 프로필을 통해 언제든 본 페이지로 다시 돌아올 수 있습니다.
          </Typography>
          <Typography>
            자세한 내용은{" "}
            <Link underline="hover" href="/notice#진행도 저장에 관한 공지">
              진행도 저장에 관한 공지
            </Link>
            를 참고하세요
          </Typography>
        </Box>
        <Box>
          <Button fullWidth variant="contained" startIcon={<GoogleIcon fontSize="large" />}>
            <Typography variant="h6" fontWeight={700}>
              구글 로그인
            </Typography>
          </Button>
          <Button fullWidth sx={{ textAlign: "center", mt: 1 }}>
            <Typography>로그인하지 않고 이용</Typography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
