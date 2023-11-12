import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

import { currentExamIndexAtom, currentQuestionAtom } from "../../../stores/test";

export const Question = () => {
  const currentIndex = useAtomValue(currentExamIndexAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom);

  return (
    <Box px={2} sx={{ flex: 1, my: 2, minHeight: 0, overflowY: "scroll" }}>
      <Paper sx={{ minHeight: "90%", p: 2 }}>
        <Typography fontWeight={700}>
          {currentIndex + 1}. {currentQuestion.share}
        </Typography>
        {currentQuestion.question.length > 10 ? (
          <>
            <Typography fontSize={"1rem"} lineHeight={2} textAlign={"left"} sx={{ mt: 2 }}>
              {currentQuestion.passage}
            </Typography>
            <Typography fontSize={"1rem"} lineHeight={1.5} textAlign={"left"} sx={{ mt: 2 }}>
              {currentQuestion.question}
            </Typography>
          </>
        ) : (
          <Typography fontSize={"3rem"} lineHeight={8} textAlign={"center"} sx={{ mt: 2 }}>
            {currentQuestion.question}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};
