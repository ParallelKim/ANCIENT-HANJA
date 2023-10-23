import ReactFlipCard from "reactjs-flip-card";
import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { currentCardAtom } from "../../stores/atoms";

const SX = {
    CARD_PAPER: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        position: "relative",
    },
    CARD_TYPO: {
        position: "absolute",
        top: "50%",
        width: "100%",
        marginTop: "-3rem",
        fontSize: "4rem",
    },
};

const StyledCard = ({ children }: { children: string }) => {
    return (
        <Paper
            elevation={10}
            sx={SX.CARD_PAPER}
        >
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
                key={currentCard.id}
                containerStyle={styles.container}
                backStyle={{ background: "gray" }}
                flipTrigger={"onClick"}
                frontComponent={
                    <StyledCard>
                        {currentCard ? currentCard.front : "404"}
                    </StyledCard>
                }
                backComponent={
                    <StyledCard>
                        {currentCard ? currentCard.back : "404"}
                    </StyledCard>
                }
            />
        </Box>
    );
};
