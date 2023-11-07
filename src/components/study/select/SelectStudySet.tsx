import { Fragment, useState } from "react";
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

import { currentClassAtom } from "../../../stores/atoms";
import { CARD } from "../../../types/card";

import previous30 from "../../../assets/previous-30.json";
import previous40 from "../../../assets/previous-40.json";
import previous50 from "../../../assets/previous-50.json";
import chars1 from "../../../assets/chars1.json";
import chars2 from "../../../assets/chars2.json";
import words1 from "../../../assets/words1.json";
import words2 from "../../../assets/words2.json";

const CATEGORIES = [
  {
    label: "기출문제 회차 별",
    list: [
      { title: "30회", contents: previous30 },
      { title: "40회", contents: previous40 },
      { title: "50회", contents: previous50 },
    ],
  },
  {
    label: "종합",
    list: [
      { title: "한자 1", contents: chars1 },
      { title: "한자 2", contents: chars2 },
    ],
  },
  {
    label: "",
    list: [
      { title: "단어 1", contents: words1 },
      { title: "단어 2", contents: words2 },
    ],
  },
];

export const SelectStudySet = () => {
  const setCurrentCardSet = useSetAtom(currentClassAtom);
  const [preview, setPreview] = useState<{
    title: string;
    contents: CARD[];
  } | null>(null);

  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Typography mb={2} variant="h5" fontWeight={800}>
        코스 선택
      </Typography>
      <Stack gap={2} justifyContent="center">
        {CATEGORIES.map((cat, idx) => (
          <Fragment key={cat.label + idx}>
            <Typography variant="h6" fontWeight={700}>
              {cat.label}
            </Typography>
            <Stack gap={2} direction="row" justifyContent="center">
              {cat.list.map((item) => (
                <ButtonGroup key={item.title} sx={{ justifyContent: "center" }}>
                  <Button variant="contained" size="medium" onClick={() => setCurrentCardSet(item)}>
                    {item.title}
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setPreview(item);
                    }}
                  >
                    <ManageSearchIcon />
                  </Button>
                </ButtonGroup>
              ))}
            </Stack>
          </Fragment>
        ))}
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
    </Paper>
  );
};
