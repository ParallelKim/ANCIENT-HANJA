import { useAtomValue } from "jotai";
import { Box, Container } from "@mui/material";
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
                display="flex"
                justifyContent="center"
            >
                {currentIndex + 1}/{CARDS.length}
            </Box>
            <CardDeck cards={CARDS} />
        </Container>
    );
};
