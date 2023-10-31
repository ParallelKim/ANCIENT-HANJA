import { Box, Paper, Stack, IconButton, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAtomValue } from "jotai";

import {
    currentIndexAtom,
    currentCardSetLengthAtom,
} from "../../../stores/atoms";

const SX = {
    STATUS_PAPER: {
        width: "100%",
        height: "6rem",
        position: "relative",
    },
    STATUS_TYPO: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        lineHeight: "6rem",
    },
};

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
                sx={SX.STATUS_PAPER}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    {/* <IconButton
                        aria-label="refresh-icon"
                        color="primary"
                        sx={{ width: "30%" }}
                    >
                        <RepeatIcon fontSize="large" />
                    </IconButton> */}
                    <Typography
                        sx={SX.STATUS_TYPO}
                        textAlign="center"
                    >
                        {currentIndex + 1}/{currentCardSetLength}
                    </Typography>
                    {/* <IconButton
                        aria-label="refresh-icon"
                        color="primary"
                        sx={{ width: "30%" }}
                    >
                        <SettingsIcon fontSize="large" />
                    </IconButton> */}
                </Stack>
            </Paper>
        </Box>
    );
};