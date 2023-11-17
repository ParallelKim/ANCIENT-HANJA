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
          let prevShare = "";
          let prevPassage = "empty";

          return (
            <Stack key={p}>
              {lastResult.res[p].map((r) => {
                return (
                  <Box key={`${p} - ${r.id}`} sx={{ textAlign: "center" }}>
                    {prevShare !== r.S && (
                      <>
                        <Typography variant="h6" fontWeight={700} py={2} sx={{ borderTop: 2, borderBottom: 2 }}>
                          {r.S}
                        </Typography>
                        {p !== prevPassage && (
                          <>
                            <Typography variant="h6" p={1}>
                              {p}
                            </Typography>
                            {(() => {
                              prevPassage = p;
                            })()}
                          </>
                        )}
                        {(() => {
                          prevShare = r.S;
                        })()}
                      </>
                    )}
                    <Typography variant={r.Q.length < 5 ? "h4" : "inherit"} sx={{ p: 2 }}>
                      {r.id + 1}. {r.Q}
                    </Typography>
                    <Stack direction="row" justifyContent="space-around" sx={{ pb: 2, borderBottom: 1 }}>
                      <Typography>정답: {r.A}</Typography>
                      <Typography>제출: {r.U ?? "없음"}</Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          );
        })}
      </Paper>
    </Container>
  );
};

export default ResultPage;
