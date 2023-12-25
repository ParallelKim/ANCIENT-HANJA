import { Container } from "@mui/material";
import { NoticeAccordion } from "../components/notice/NoticeAccordion";

const NoticePage = () => {
  return (
    <Container id="notice-page" sx={{ height: "100%" }}>
      <NoticeAccordion />
    </Container>
  );
};

export default NoticePage;
