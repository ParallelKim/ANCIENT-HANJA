import {
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    Typography,
    SvgIcon,
    Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { ReactComponent as KakaoTalkIcon } from "../assets/kakaoIcon.svg";

export const IntroducePage = () => {
    return (
        <Container
            id="intro-page"
            sx={{ height: "100%" }}
        >
            <Stack>
                <Box my={2}>
                    <Paper sx={{ p: 2, fontSize: "2rem" }}>
                        <Typography>안녕하세요.</Typography>
                        <Typography>한자 공부 웹을 만들었습니다.</Typography>
                        <Typography>
                            아직 기능이 많지는 않지만, 천천히 업데이트 할
                            예정입니다.
                        </Typography>
                        <Typography>
                            혹시 원하는 기능이 있다면 아래 링크로 연락 바라요.
                        </Typography>
                        <Typography>다들 한자 시험 화이팅입니다.</Typography>
                    </Paper>
                </Box>
                <Box my={2}>
                    <Paper
                        sx={{
                            p: 2,
                            fontSize: "2rem",
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <Button
                            variant="contained"
                            href={"/study"}
                        >
                            <Typography>공부하러 가기</Typography>
                        </Button>
                    </Paper>
                </Box>
                <Box my={2}>
                    <Paper sx={{ p: 2, fontSize: "2rem" }}>
                        <Typography>연락처</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
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
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Container>
    );
};
