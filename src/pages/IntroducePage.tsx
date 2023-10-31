import { Button, Container, Stack, Typography } from "@mui/material";

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
                    size="large"
                >
                    <Typography
                        variant="h5"
                        py={1}
                        fontWeight={700}
                    >
                        공부하러 가기
                    </Typography>
                </Button>
                <LinkBlock />
            </Stack>
        </Container>
    );
};
