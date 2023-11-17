import { Box, Link, Paper, Typography } from "@mui/material";

import { SelectableTests } from "./SelectableTests";

export const SelectTest = () => {
  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Typography mb={2} variant="h5" fontWeight={800}>
        시험 선택
      </Typography>
      <SelectableTests />
      <Box sx={{ pt: 4, width: "100%", textAlign: "center" }}>
        <Link underline="hover" href="/notice#자료 출처에 관한 공지">
          자료 출처에 관한 공지
        </Link>
      </Box>
    </Paper>
  );
};
