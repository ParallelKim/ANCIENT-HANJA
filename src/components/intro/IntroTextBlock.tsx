import { Box, Paper, Typography } from "@mui/material";

export const IntroTextBlock = () => {
    return (
        <Box>
            <Paper sx={{ p: 2, fontSize: "2rem" }}>
                <Typography>안녕하세요</Typography>
                <Typography>한자 공부 웹을 만들었습니다</Typography>
                <p />
                <Typography>
                    아직 기능이 많지는 않지만, 천천히 업데이트 해 나갈
                    예정입니다
                </Typography>
                <Typography>
                    아래에 제게 연락할 수 있는 링크가 있습니다
                </Typography>
                <Typography>
                    기능 요청, 버그 제보, 기여, 커피챗 등 모든 문의 환영입니다
                </Typography>
                <p />
                <Typography>다들 한자 시험 파이팅입니다</Typography>
            </Paper>
        </Box>
    );
};
