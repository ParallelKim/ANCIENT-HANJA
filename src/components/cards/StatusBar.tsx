import { Box, Paper, Stack, IconButton, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAtomValue } from "jotai";

import { currentIndexAtom, currentCardSetLengthAtom } from "../../stores/atoms";

export const StatusBar = () => {
    const currentIndex = useAtomValue(currentIndexAtom);
    const currentCardSetLength = useAtomValue(currentCardSetLengthAtom);

    return (
        <Box
            mt={2}
            p={2}
        >
            <Paper
                elevation={10}
                sx={{
                    width: "100%",
                    height: "6rem",
                    position: "relative",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <IconButton
                        aria-label="refresh-icon"
                        color="primary"
                        sx={{ width: "30%" }}
                    >
                        <RepeatIcon fontSize="large" />
                    </IconButton>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            lineHeight: "6rem",
                        }}
                    >
                        {currentIndex + 1}/{currentCardSetLength}
                    </Typography>
                    <IconButton
                        aria-label="refresh-icon"
                        color="primary"
                        sx={{ width: "30%" }}
                    >
                        <SettingsIcon fontSize="large" />
                    </IconButton>
                </Stack>
            </Paper>
        </Box>
    );
};
