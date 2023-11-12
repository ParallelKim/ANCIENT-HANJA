import { useAtomValue, useSetAtom } from "jotai";
import { Box, ButtonGroup, IconButton, Paper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import GradingIcon from "@mui/icons-material/Grading";

import { moveCurrentIndexAtom, currentIndexStateAtom } from "../../../stores/test";

const SX = {
  BT_GROUP: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "3rem",
    mt: "1rem",
    gap: "1rem",
    fontSize: "2rem",
  },
};

export const ControlButtons = ({ setIsOpen }: { setIsOpen: (arg: boolean) => void }) => {
  const currentIndexState = useAtomValue(currentIndexStateAtom);
  const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

  const iconsInfos = [
    {
      icon: <ArrowBack fontSize="small" />,
      label: "arrow-back",
      onClick: () => moveCurrentIndex("prev"),
      disabled: currentIndexState === "first",
    },
    {
      icon: currentIndexState === "last" ? <GradingIcon fontSize="small" /> : <ArrowForward fontSize="small" />,
      label: "arrow-forward",
      onClick: () => {
        if (currentIndexState === "last") {
          console.log();
          setIsOpen(true);
        } else {
          moveCurrentIndex("next");
        }
      },
    },
  ];

  return (
    <Box px={2}>
      <Paper>
        <ButtonGroup size="small" sx={SX.BT_GROUP} variant="contained" aria-label="outlined button group">
          {iconsInfos.map((iconInfo) => {
            return (
              <IconButton
                key={iconInfo.label}
                aria-label={iconInfo.label}
                color="primary"
                sx={{ p: 2 }}
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
