import { Box, Paper, Stack, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSetAtom } from "jotai";

import { currentExamIndexAtom, currentExamAtom, resetUserAnswerAtom } from "../../../stores/test";
import { ExamTimer } from "./ExamTimer";

const SX = {
  STATUS_PAPER: {
    width: "100%",
    position: "relative",
  },
};

export const StatusBar = () => {
  const setCurrentIndex = useSetAtom(currentExamIndexAtom);
  const setCurrentExam = useSetAtom(currentExamAtom);
  const resetUserAnswer = useSetAtom(resetUserAnswerAtom);

  return (
    <Box mt={2} p={2}>
      <Paper elevation={10} sx={SX.STATUS_PAPER}>
        <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
          <IconButton
            aria-label="refresh-icon"
            color="primary"
            sx={{ width: "10%" }}
            onClick={() => {
              setCurrentExam(null);
              setCurrentIndex(0);
              resetUserAnswer();
            }}
          >
            <ExitToAppIcon fontSize="medium" />
          </IconButton>
          <ExamTimer />
          <IconButton aria-label="refresh-icon" color="primary" sx={{ width: "10%" }} />
        </Stack>
      </Paper>
    </Box>
  );
};
