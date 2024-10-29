import { ArrowBack, ArrowForward } from "@mui/icons-material";
import GradingIcon from "@mui/icons-material/Grading";
import { Box, ButtonGroup, IconButton, Paper, Typography } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";

import {
  currentExamIndexAtom,
  currentIndexStateAtom,
  currentQuestionSetLengthAtom,
  moveCurrentIndexAtom,
} from "@/stores/test";

const SX = {
  BT_GROUP: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "3rem",
    mt: "1rem",
    gap: "1rem",
    fontSize: "2rem",
  },
};

export const ControlButtons = ({ setIsOpen }: { setIsOpen: (arg: boolean) => void }) => {
  const currentIndex = useAtomValue(currentExamIndexAtom);
  const currentCardSetLength = useAtomValue(currentQuestionSetLengthAtom);
  const currentIndexState = useAtomValue(currentIndexStateAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  return (
    <Box px={2}>
      <Paper>
        <ButtonGroup size="small" sx={SX.BT_GROUP} variant="contained" aria-label="outlined button group">
          <IconButton
            key="arrow-back"
            aria-label="arrow-back"
            color="primary"
            sx={{ p: 2 }}
            onClick={() => moveCurrentIndex("prev")}
            disabled={currentIndexState === "first"}
          >
            <ArrowBack fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: "3rem",
            }}
            textAlign="center"
          >
            {currentIndex + 1}/{currentCardSetLength}
          </Typography>
          {currentIndexState === "last" ? (
            <IconButton
              key="arrow-forward"
              aria-label="arrow-forward"
              color="primary"
              sx={{ p: 2 }}
              onClick={() => {
                console.log();
                setIsOpen(true);
              }}
            >
              <GradingIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              key="finish-exam"
              aria-label="finish-exam"
              color="primary"
              sx={{ p: 2 }}
              onClick={() => {
                moveCurrentIndex("next");
              }}
            >
              <ArrowForward fontSize="small" />
            </IconButton>
          )}
        </ButtonGroup>
      </Paper>
    </Box>
  );
};
