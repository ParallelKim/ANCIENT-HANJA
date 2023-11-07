import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Paper,
  Typography,
  Box,
  DialogActions,
  Button,
} from "@mui/material";
import { useSetAtom } from "jotai";

import { currentCourseAtom } from "../../../stores/atoms";
import { Course } from "../../../types/card";

export const SelectablePreview = ({
  preview,
  setPreview,
}: {
  preview: Course | null;
  setPreview: (course: Course | null) => void;
}) => {
  const setCurrentCardSet = useSetAtom(currentCourseAtom);

  return (
    <Dialog
      open={Boolean(preview)}
      onClose={() => setPreview(null)}
      scroll="paper"
      maxWidth="md"
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" variant="h4">
        카드 미리보기
      </DialogTitle>
      {preview && (
        <>
          <DialogContent>
            <Stack gap={2} p={2} mx={-3} sx={{ backgroundColor: "primary.dark" }}>
              {preview.contents.map((card, idx) => (
                <Paper key={card.id}>
                  <Stack flex={1} px={4} py={1} direction="row" gap={2} justifyContent="space-around">
                    <Typography textAlign="right" lineHeight="3rem" fontSize="1.5rem">
                      {idx + 1}
                    </Typography>
                    <Box flex={1} gap={2} display="flex" justifyContent="center">
                      <Typography fontSize="2rem">{card.front}</Typography>
                      <Typography fontSize="2rem">{card.back}</Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button size="large" variant="contained" onClick={() => setCurrentCardSet(preview)}>
              시작
            </Button>
            <Button size="large" variant="contained" onClick={() => setPreview(null)}>
              닫기
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
