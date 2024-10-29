import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

import { currentExamIndexAtom, currentPassageAtom, currentQuestionAtom, currentShareAtom } from "@/stores/test";

export const Question = () => {
  const currentIndex = useAtomValue(currentExamIndexAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom);
  const currentShare = useAtomValue(currentShareAtom);
  const currentPassage = useAtomValue(currentPassageAtom);

  return (
    <Box px={2} sx={{ flex: 1, my: 2, minHeight: 0, overflowY: "scroll", boxSizing: "border-box" }}>
      <Paper sx={{ minHeight: "90%", p: 2 }}>
        <Typography fontWeight={700}>
          {currentIndex + 1}. {currentShare}
        </Typography>
        {currentQuestion.question.length > 10 ? (
          <>
            <Typography fontSize="1rem" lineHeight={2} textAlign="left" sx={{ mt: 2 }}>
              {currentPassage}
            </Typography>
            <Typography fontSize="1rem" lineHeight={1.5} textAlign="left" sx={{ mt: 2 }}>
              {currentQuestion.question}
            </Typography>
          </>
        ) : (
          <Typography fontSize="3rem" textAlign="center" sx={{ mt: 3 }}>
            {currentQuestion.question}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};
