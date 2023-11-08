import { Button, Container, Stack, Typography } from "@mui/material";

import { IntroTextBlock } from "../components/intro/IntroTextBlock";
import { LinkBlock } from "../components/intro/LinkBlock";
import { ScheduleBlock } from "../components/intro/ScheduleBlock";

const IntroducePage = () => {
  return (
    <Container id="intro-page" sx={{ height: "100%" }}>
      <Stack py={2} gap={2}>
        <ScheduleBlock />
        <Button href="/study" variant="contained" size="large">
          <Typography variant="h5" py={1} fontWeight={700}>
            공부하기
          </Typography>
        </Button>
        <IntroTextBlock />
        <Button href="/notice" variant="contained" size="large">
          <Typography variant="h5" py={1} fontWeight={700}>
            공지사항
          </Typography>
        </Button>
        <LinkBlock />
      </Stack>
    </Container>
  );
};

export default IntroducePage;
