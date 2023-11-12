import { useAtomValue, useSetAtom } from "jotai";
import { Box, ButtonGroup, IconButton, Paper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ReplayIcon from "@mui/icons-material/Replay";

import { moveCurrentIndexAtom, currentCardAtom, currentIndexStateAtom } from "../../../stores/course";
import { HANJA_SEARCH } from "../../../constants/externalURL";

const SX = {
  BT_GROUP: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "6rem",
    mt: "1rem",
    gap: "1rem",
    fontSize: "2rem",
  },
};

export const ControlButtons = () => {
  const currentIndexState = useAtomValue(currentIndexStateAtom);
  const currentCard = useAtomValue(currentCardAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  const iconsInfos = [
    {
      icon: <ArrowBack fontSize="large" />,
      label: "arrow-back",
      onClick: () => moveCurrentIndex("prev"),
      disabled: currentIndexState === "first",
    },
    {
      icon: <AutoStoriesIcon fontSize="large" />,
      label: "auto-stories-icon",
      disabled: !currentCard,
    },
    {
      icon: currentIndexState === "last" ? <ReplayIcon fontSize="large" /> : <ArrowForward fontSize="large" />,
      label: "arrow-forward",
      onClick: () => {
        if (currentIndexState === "last") {
          moveCurrentIndex("reset");
        } else {
          moveCurrentIndex("next");
        }
      },
    },
  ];

  return (
    <Box px={2}>
      <Paper>
        <ButtonGroup sx={SX.BT_GROUP} variant="contained" aria-label="outlined button group">
          {iconsInfos.map((iconInfo) => {
            return (
              <IconButton
                key={iconInfo.label}
                aria-label={iconInfo.label}
                color="primary"
                sx={{ width: "30%" }}
                onClick={iconInfo.onClick}
                disabled={iconInfo.disabled}
              >
                {iconInfo.icon}
              </IconButton>
            );
          })}
        </ButtonGroup>
      </Paper>
    </Box>
  );
};
