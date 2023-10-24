import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
    return (
        <Box>
            <Paper sx={{ p: 2, fontSize: "2rem" }}>
                <Typography>안녕하세요</Typography>
                <Typography>한자 공부 웹을 만들었습니다</Typography>
                <Typography>
                    아직 기능이 많지는 않지만, 천천히 업데이트 해 나갈
                    예정입니다
                </Typography>
                <Typography>
                    혹시 원하는 기능이 있다면 아래 링크로 연락 바라요
                </Typography>
                <Typography>다들 한자 시험 파이팅입니다</Typography>
            </Paper>
        </Box>
    );
};
