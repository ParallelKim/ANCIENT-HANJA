import { Box, IconButton, Paper, Stack, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { ReactComponent as KakaoTalkIcon } from "../../assets/kakaoIcon.svg";

export const LinkBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Stack direction="row" justifyContent="space-between">
          <IconButton
            aria-label="kakao-icon"
            color="primary"
            sx={{ width: "30%" }}
            href="https://open.kakao.com/o/sZYA1uOf"
            target="_blank"
          >
            <SvgIcon fontSize="large">
              <KakaoTalkIcon />
            </SvgIcon>
          </IconButton>
          <IconButton
            aria-label="email-icon"
            color="primary"
            sx={{ width: "30%" }}
            href="mailto:parallelkim12@gamil.com"
            target="_blank"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="github-icon"
            color="primary"
            sx={{ width: "30%" }}
            href="https://github.com/ParallelKim/ANCIENT-HANJA"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};
