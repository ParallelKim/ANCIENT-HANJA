import { Box, Paper, Button, Typography } from "@mui/material";

export const NavBlock = () => {
    return (
        <Box>
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
    );
};
