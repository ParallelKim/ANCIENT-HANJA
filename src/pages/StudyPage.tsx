import { useAtomValue } from "jotai";
import {
    Box,
    Container,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import SettingsIcon from "@mui/icons-material/Settings";

import { CardDeck } from "../components/cards/CardDeck";
import { currentIndexAtom } from "../stores/atoms";

const CARDS = [
    { id: 0, front: "테스트0", back: "test0" },
    { id: 1, front: "테스트1", back: "test1" },
    { id: 2, front: "테스트2", back: "test2" },
];

export const StudyPage = () => {
    const currentIndex = useAtomValue(currentIndexAtom);

    return (
        <Container id="study-page">
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
                            {currentIndex + 1}/{CARDS.length}
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
            <CardDeck cards={CARDS} />
        </Container>
    );
};
