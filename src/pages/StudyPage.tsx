import { Container } from "@mui/material";

import { CardDeck } from "../components/cards/CardDeck";
import { StatusBar } from "../components/cards/StatusBar";

const CARDS = [
    { id: 0, front: "테스트0", back: "test0" },
    { id: 1, front: "테스트1", back: "test1" },
    { id: 2, front: "테스트2", back: "test2" },
];

export const StudyPage = () => {
    return (
        <Container id="study-page">
            <StatusBar />
            <CardDeck cards={CARDS} />
        </Container>
    );
};
