import { useAtomValue } from "jotai";
import { FlashCard } from "./FlashCard";
import { Box } from "@mui/material";
import { currentCardAtom } from "../../stores/atoms";

export const CardDeck = () => {
    const currentCard = useAtomValue(currentCardAtom);

    return (
        <Box
            px={2}
            position="relative"
        >
            <FlashCard card={currentCard} />
        </Box>
    );
};
