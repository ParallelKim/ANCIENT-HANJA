import { Box, Button, ButtonGroup, Input, Paper, Stack } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { answerableAtom, inputAnswerAtom } from "../../../stores/test";

const NUM_ICON = ["①", "②", "③", "④"];

export const CheckAnswer = () => {
  const answerable = useAtomValue(answerableAtom);
  const inputAnswer = useSetAtom(inputAnswerAtom);

  return (
    <Box p={2}>
      <Paper>
        {answerable ? (
          <Stack direction="row" flexWrap="wrap">
            {answerable.map((ans, idx) => (
              <Button
                sx={{ p: 0, width: ans.length > 5 ? "100%" : "50%" }}
                key={ans}
                onClick={() => {
                  inputAnswer(idx);
                }}
              >
                {NUM_ICON[idx]} {ans}
              </Button>
            ))}
          </Stack>
        ) : (
          <Input />
        )}
      </Paper>
    </Box>
  );
};
