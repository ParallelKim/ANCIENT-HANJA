import { Box, IconButton, Paper, Stack, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactComponent as KakaoTalkIcon } from "../../assets/kakaoIcon.svg";
import { GITHUB, OPEN_KAKAO } from "../../constants/externalURL";

const LINKS = [
  {
    label: "kakao-icon",
    href: OPEN_KAKAO,
    icon: (
      <SvgIcon fontSize="large">
        <KakaoTalkIcon />
      </SvgIcon>
    ),
  },

  {
    label: "github-icon",
    href: GITHUB,
    icon: <GitHubIcon fontSize="large" />,
  },
];

export const LinkBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, fontSize: "2rem" }}>
        <Stack direction="row" justifyContent="space-around">
          {LINKS.map(({ label, href, icon }) => (
            <IconButton key={label} aria-label={label} color="primary" href={href} target="_blank">
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};
