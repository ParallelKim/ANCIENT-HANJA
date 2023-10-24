import { Container, Stack } from "@mui/material";

import { IntroTextBlock } from "../components/intro/IntroTextBlock";
import { NavBlock } from "../components/intro/NavBlock";
import { LinkBlock } from "../components/intro/LinkBlock";

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
                <IntroTextBlock />
                <NavBlock />
                <LinkBlock />
            </Stack>
        </Container>
    );
};
