import { useState } from "react";
import { useSetAtom } from "jotai";
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

import { currentClassAtom } from "../../stores/atoms";
import { CARD } from "../../types/card";

import previous30 from "../../assets/previous-30.json";
import previous40 from "../../assets/previous-40.json";
import previous50 from "../../assets/previous-50.json";

import chars1 from "../../assets/chars1.json";
import chars2 from "../../assets/chars2.json";

import words1 from "../../assets/words1.json";
import words2 from "../../assets/words2.json";

const PREVIOUS = [
  { label: "30회", set: previous30 },
  { label: "40회", set: previous40 },
  { label: "50회", set: previous50 },
];

const CHARS = [
  { label: "한자 1", set: chars1 },
  { label: "한자 2", set: chars2 },
];

const WORDS = [
  { label: "단어 1", set: words1 },
  { label: "단어 2", set: words2 },
];

export const SelectStudySet = () => {
  const setCurrentCardSet = useSetAtom(currentClassAtom);
  const [preview, setPreview] = useState<{
    title: string;
    contents: CARD[];
  } | null>(null);

  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Typography mb={2} variant="h5" fontWeight={700}>
        공부할 코스를 선택해 주세요
      </Typography>
      <Stack gap={2} justifyContent="center">
        <Typography variant="h6" fontWeight={700}>
          기출문제 회차 별
        </Typography>
        <Stack gap={2} direction="row" justifyContent="center">
          {PREVIOUS.map((btn) => (
            <ButtonGroup key={btn.label} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                size="medium"
                onClick={() =>
                  setCurrentCardSet(
                    btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  )
                }
              >
                {btn.label}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setPreview({
                    title: btn.label,
                    contents: btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  });
                }}
              >
                <ManageSearchIcon />
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
        <Typography variant="h6" fontWeight={700}>
          종합
        </Typography>
        <Stack gap={2} direction="row" justifyContent="center">
          {CHARS.map((btn) => (
            <ButtonGroup key={btn.label} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                size="medium"
                onClick={() =>
                  setCurrentCardSet(
                    btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  )
                }
              >
                {btn.label}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setPreview({
                    title: btn.label,
                    contents: btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  });
                }}
              >
                <ManageSearchIcon />
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
        <Stack gap={2} direction="row" justifyContent="center">
          {WORDS.map((btn) => (
            <ButtonGroup key={btn.label} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                size="medium"
                onClick={() =>
                  setCurrentCardSet(
                    btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  )
                }
              >
                {btn.label}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setPreview({
                    title: btn.label,
                    contents: btn.set.map((card, idx) => ({
                      id: `${btn.label} - ${idx}`,
                      ...card,
                    })),
                  });
                }}
              >
                <ManageSearchIcon />
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
      </Stack>
      <Box sx={{ pt: 4, width: "100%", textAlign: "center" }}>
        <Link underline="hover" href="/notice#자료 출처에 관한 공지">
          자료 출처에 관한 공지
        </Link>
      </Box>
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
              <DialogContentText id="alert-dialog-description">
                <Stack gap={2} p={2} mx={-3} sx={{ backgroundColor: "primary.dark" }}>
                  {preview?.contents.map((card, idx) => (
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
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button size="large" variant="contained" onClick={() => setCurrentCardSet(preview?.contents)}>
                시작
              </Button>
              <Button size="large" variant="contained" onClick={() => setPreview(null)}>
                닫기
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Paper>
  );
};
