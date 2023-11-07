import { Box, IconButton, Paper, Stack, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as KakaoTalkIcon } from "../../assets/kakaoIcon.svg";
import { GITHUB, INSTAGRAM, OPEN_KAKAO } from "../../constants/externalURL";

export const LinkBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Stack direction="row" justifyContent="space-between">
          <IconButton aria-label="kakao-icon" color="primary" sx={{ width: "30%" }} href={OPEN_KAKAO} target="_blank">
            <SvgIcon fontSize="large">
              <KakaoTalkIcon />
            </SvgIcon>
          </IconButton>
          <IconButton aria-label="email-icon" color="primary" sx={{ width: "30%" }} href={INSTAGRAM} target="_blank">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="github-icon" color="primary" sx={{ width: "30%" }} href={GITHUB} target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};
