import { Stack } from "@mui/material";
import { FlashCard } from "./FlashCard";
import { CARD } from "../../types/card";

export const CardCarousel = ({ cards }: { cards: CARD[] }) => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
        >
            {cards.map((card) => (
                <FlashCard
                    key={card.id + card.front}
                    card={card}
                />
            ))}
        </Stack>
    );
};
