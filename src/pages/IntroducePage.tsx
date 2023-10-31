import { Button, Container, Stack } from "@mui/material";

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
                gap={2}
            >
                <CountdownBlock />
                <IntroTextBlock />
                <Button
                    href="/study"
                    variant="contained"
                >
                    공부하러 가기
                </Button>
                <LinkBlock />
            </Stack>
        </Container>
    );
};
