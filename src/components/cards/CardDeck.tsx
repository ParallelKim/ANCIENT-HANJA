import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";

import { FlashCard } from "./FlashCard";
import { CARD } from "../../types/card";
import { currentIndexAtom } from "../../stores/atoms";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const CardDeck = ({ cards }: { cards: CARD[] }) => {
    const currentIndex = useAtomValue(currentIndexAtom);

    return (
        <Box
            px={2}
            position="relative"
        >
            <FlashCard card={cards[cards.length - currentIndex - 1]} />
            <ButtonGroup
                sx={{ height: "6rem", pt: 4, gap: "1rem" }}
                variant="outlined"
                aria-label="outlined button group"
            >
                <IconButton aria-label="left-arrow">
                    <ArrowBack />
                </IconButton>
                <Button
                    href={`https://hanja.dict.naver.com/#/search?query=${
                        cards[cards.length - currentIndex - 1].back
                    }`}
                    target="_blank"
                >
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                        국어사전
                    </Typography>
                </Button>
                <IconButton aria-label="left-arrow">
                    <ArrowForward />
                </IconButton>
            </ButtonGroup>
        </Box>
    );
};
