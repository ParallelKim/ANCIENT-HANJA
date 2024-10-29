import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, ButtonGroup, IconButton, Paper } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";

import { HANJA_SEARCH } from "../../../../config/constants/externalURL";
import { currentCardAtom, currentIndexStateAtom, moveCurrentIndexAtom } from "../../../../stores/course";

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
      href: HANJA_SEARCH + currentCard.front,
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
    <Box px={2} mb={4}>
      <Paper>
        <ButtonGroup sx={SX.BT_GROUP} variant="contained" aria-label="outlined button group">
          {iconsInfos.map((iconInfo) => {
            return (
              <IconButton
                key={iconInfo.label}
                aria-label={iconInfo.label}
                color="primary"
                sx={{ width: "30%" }}
                {...(iconInfo.href && {
                  href: iconInfo.href,
                  target: "_blank",
                })}
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
