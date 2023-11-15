import { useAtomValue } from "jotai";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import { lastResultAtom } from "../stores/test";

const ResultPage = () => {
  const lastResult = useAtomValue(lastResultAtom);

  if (!lastResult) return null;

  return (
    <Container
      id="test-page"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 4,
        overflowY: "scroll",
      }}
    >
      <Paper sx={{ p: 2 }}>
        {lastResult.passage.map((p) => {
          return (
            <Stack key={p}>
              {p !== "empty" && <Typography variant="h6">{p}</Typography>}
              <Typography>{lastResult.res[p][0].S}</Typography>
              {lastResult.res[p].map((r) => (
                <Box key={`${p} - ${r.id}`} sx={{ textAlign: "center" }}>
                  {/* <Typography>{r.S}</Typography> */}
                  <Typography variant="h5" sx={{ p: 2 }}>
                    {r.Q}
                  </Typography>
                  <Stack direction="row" justifyContent="space-around">
                    <Typography>정답: {r.A}</Typography>
                    <Typography>제출: {r.U ?? "없음"}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          );
        })}
      </Paper>
    </Container>
  );
};

export default ResultPage;
