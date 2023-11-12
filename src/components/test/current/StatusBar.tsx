import { Box, Paper, Stack, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import {
  currentExamIndexAtom,
  currentQuestionSetLengthAtom,
  currentExamAtom,
  resetUserAnswerAtom,
} from "../../../stores/test";

const SX = {
  STATUS_PAPER: {
    width: "100%",
    height: "4rem",
    position: "relative",
  },
  STATUS_TYPO: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "4rem",
  },
};

export const StatusBar = () => {
  const [currentIndex, setCurrentIndex] = useAtom(currentExamIndexAtom);
  const currentCardSetLength = useAtomValue(currentQuestionSetLengthAtom);
  const setCurrentExam = useSetAtom(currentExamAtom);
  const resetUserAnswer = useSetAtom(resetUserAnswerAtom);

  return (
    <Box mt={2} p={2}>
      <Paper elevation={10} sx={SX.STATUS_PAPER}>
        <Stack direction="row" justifyContent="space-between">
          <IconButton
            aria-label="refresh-icon"
            color="primary"
            sx={{ width: "30%" }}
            onClick={() => {
              setCurrentExam(null);
              setCurrentIndex(0);
              resetUserAnswer();
            }}
          >
            <ArrowBackIcon fontSize="medium" />
          </IconButton>
          <Typography sx={SX.STATUS_TYPO} textAlign="center">
            {currentIndex + 1}/{currentCardSetLength}
          </Typography>
          <IconButton aria-label="refresh-icon" color="primary" sx={{ width: "30%" }}></IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};
