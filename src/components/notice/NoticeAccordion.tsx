import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

import { noticeList } from "../../constants/notices";

export const NoticeAccordion = () => {
  return (
    <Box py={2}>
      {noticeList
        .map((notice, index) => (
          <Accordion
            key={`notice-${index}-${notice.title}`}
            defaultExpanded={location.hash.replace("#", "") === encodeURIComponent(notice.title)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6">{notice.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{notice.content}</AccordionDetails>
          </Accordion>
        ))
        .reverse()}
    </Box>
  );
};
