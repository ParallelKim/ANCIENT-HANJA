import { Box, Link, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Course } from "../../../../types/card";
import { SelectableCourses } from "./SelectableCourses";
import { SelectablePreview } from "./SelectablePreview";

export const SelectStudySet = () => {
  const [preview, setPreview] = useState<Course | null>(null);

  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Typography mb={2} variant="h5" fontWeight={800}>
        코스 선택
      </Typography>
      <SelectableCourses setPreview={setPreview} />
      <Box sx={{ pt: 4, width: "100%", textAlign: "center" }}>
        <Link underline="hover" href="/notice#자료 출처에 관한 공지">
          자료 출처에 관한 공지
        </Link>
      </Box>
      <SelectablePreview preview={preview} setPreview={setPreview} />
    </Paper>
  );
};
