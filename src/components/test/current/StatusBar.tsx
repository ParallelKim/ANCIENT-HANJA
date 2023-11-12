import { Box, Paper, Stack, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SettingsIcon from "@mui/icons-material/Settings";
import { useAtomValue, useSetAtom } from "jotai";

import {
  currentExamIndexAtom,
  currentQuestionSetLengthAtom,
  currentQuestionAtom,
  currentExamAtom,
} from "../../../stores/test";

const SX = {
  STATUS_PAPER: {
    width: "100%",
    height: "6rem",
    position: "relative",
  },
  STATUS_TYPO: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "6rem",
  },
};

export const StatusBar = () => {
  const currentIndex = useAtomValue(currentExamIndexAtom);
  const currentCardSetLength = useAtomValue(currentQuestionSetLengthAtom);
  const setCurrentExam = useSetAtom(currentExamAtom);

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
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Typography sx={SX.STATUS_TYPO} textAlign="center">
            {currentIndex + 1}/{currentCardSetLength}
          </Typography>
          <IconButton aria-label="refresh-icon" color="primary" sx={{ width: "30%" }}>
            {/* <SettingsIcon fontSize="large" /> */}
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};
