import { Box, Button, Input, Paper, Stack } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { answerableAtom, currentUserAnswerAtom, inputAnswerAtom } from "../../../stores/test";

const NUM_ICON = ["①", "②", "③", "④"];

export const CheckAnswer = () => {
  const answerable = useAtomValue(answerableAtom);
  const inputAnswer = useSetAtom(inputAnswerAtom);

  const currentUserAnswer = useAtomValue(currentUserAnswerAtom);

  return (
    <Box p={2}>
      <Paper sx={{ p: 2 }}>
        {answerable ? (
          <Stack direction="row" flexWrap="wrap" useFlexGap spacing={2}>
            {answerable.map((ans, idx) =>
              currentUserAnswer === idx + 1 ? (
                <Button
                  variant="contained"
                  sx={{ p: 0, width: ans.length > 5 ? "80%" : "40%", flexGrow: 1 }}
                  key={ans}
                  onClick={() => {
                    inputAnswer(idx + 1);
                  }}
                >
                  {NUM_ICON[idx]} {ans}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  sx={{ p: 0, width: ans.length > 5 ? "80%" : "40%", flexGrow: 1 }}
                  key={ans}
                  onClick={() => {
                    inputAnswer(idx + 1);
                  }}
                >
                  {NUM_ICON[idx]} {ans}
                </Button>
              ),
            )}
          </Stack>
        ) : (
          <Input fullWidth />
        )}
      </Paper>
    </Box>
  );
};
