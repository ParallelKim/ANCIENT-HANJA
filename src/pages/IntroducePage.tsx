import { Container, Stack } from "@mui/material";

import { IntroTextBlock } from "../components/intro/IntroTextBlock";
import { LinkBlock } from "../components/intro/LinkBlock";
import { CountdownBlock } from "../components/intro/CountdownBlock";

export const IntroducePage = () => {
    return (
        <Container
            id="intro-page"
            sx={{ height: "100%" }}
        >
            <Stack
                py={2}
                gap={4}
            >
                <CountdownBlock />
                <IntroTextBlock />
                <LinkBlock />
            </Stack>
        </Container>
    );
};
