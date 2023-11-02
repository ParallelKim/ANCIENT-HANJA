import ReactFlipCard from "reactjs-flip-card";
import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

import { currentCardAtom } from "../../../stores/atoms";

const SX = {
  CARD_PAPER: {
    display: "flex",
    width: "100%",
    height: "100%",
    p: 2,
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  CARD_TYPO: {
    width: "100%",
    fontSize: "4rem",
    lineHeight: 1,
    textAlign: "center",
  },
};

const StyledCard = ({ children }: { children: string }) => {
  return (
    <Paper elevation={10} sx={SX.CARD_PAPER}>
      <Typography sx={SX.CARD_TYPO}>{children}</Typography>
    </Paper>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "unset",
    aspectRatio: 1,
    zIndex: 1,
  },
};

export const FlashCard = () => {
  const currentCard = useAtomValue(currentCardAtom);

  return (
    <Box px={2}>
      <ReactFlipCard
        key={currentCard?.id ?? -1}
        containerStyle={styles.container}
        backStyle={{ background: "gray" }}
        flipTrigger="onClick"
        frontComponent={<StyledCard>{currentCard ? currentCard.front : "404"}</StyledCard>}
        backComponent={<StyledCard>{currentCard ? currentCard.back : "404"}</StyledCard>}
      />
    </Box>
  );
};
