import { Container } from "@mui/material";

import { CardDeck } from "../components/cards/CardDeck";
import { StatusBar } from "../components/cards/StatusBar";
import { ControlButtons } from "../components/cards/ControlButtons";

export const StudyPage = () => {
    return (
        <Container id="study-page">
            <StatusBar />
            <CardDeck />
            <ControlButtons />
        </Container>
    );
};
