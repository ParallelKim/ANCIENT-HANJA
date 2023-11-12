import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

import { currentQuestionAtom } from "../../../stores/test";

export const Question = () => {
  const currentQuestion = useAtomValue(currentQuestionAtom);

  return (
    <Box px={2}>
      <Paper>
        <Typography>{currentQuestion.share}</Typography>
        <Typography>{currentQuestion.question}</Typography>
      </Paper>
    </Box>
  );
};
