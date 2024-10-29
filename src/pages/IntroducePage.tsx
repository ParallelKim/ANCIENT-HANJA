import { Button, Container, Stack, Typography } from "@mui/material";

import { IntroTextBlock } from "@/components/features/schedule/IntroTextBlock";
import { LinkBlock } from "@/components/features/schedule/LinkBlock";
import { ScheduleBlock } from "@/components/features/schedule/ScheduleBlock";

const IntroducePage = () => {
  return (
    <Container id="intro-page" sx={{ height: "100%", overflowY: "scroll" }}>
      <Stack py={2} gap={2}>
        <ScheduleBlock />
        <Button href="/study" variant="contained" size="large">
          <Typography variant="h5" py={1} fontWeight={700}>
            공부하기
          </Typography>
        </Button>
        <Button href="/exam" variant="contained" size="large">
          <Typography variant="h5" py={1} fontWeight={700}>
            모의시험
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
