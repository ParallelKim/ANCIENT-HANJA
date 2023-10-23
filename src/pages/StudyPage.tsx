import { Container } from "@mui/material";

import { StatusBar } from "../components/cards/StatusBar";
import { ControlButtons } from "../components/cards/ControlButtons";
import { FlashCard } from "../components/cards/FlashCard";
import { CurrentRunManager } from "../managers/CurrentRunManager";

export const StudyPage = () => {
    return (
        <Container id="study-page">
            <CurrentRunManager />
            <StatusBar />
            <FlashCard />
            <ControlButtons />
        </Container>
    );
};
