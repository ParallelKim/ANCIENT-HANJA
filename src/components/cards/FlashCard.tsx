import ReactFlipCard from "reactjs-flip-card";
import { Box, Paper, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { currentCardAtom } from "../../stores/atoms";

const StyledCard = ({ children }: { children: string }) => {
    return (
        <Paper
            elevation={10}
            sx={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Typography
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: "100%",
                    marginTop: "-3rem",
                    fontSize: "4rem",
                }}
            >
                {children}
            </Typography>
        </Paper>
    );
};

const styles = {
    container: { width: "100%", height: "unset", aspectRatio: 1 },
    card: { background: "gray", color: "white", borderRadius: 20 },
};

export const FlashCard = ({ disabled }: { disabled?: boolean }) => {
    const currentCard = useAtomValue(currentCardAtom);

    return (
        <Box
            px={2}
            position="relative"
        >
            <ReactFlipCard
                containerStyle={{
                    ...styles.container,
                    ...(disabled
                        ? { position: "relative", top: "-100%" }
                        : { zIndex: 1, position: "relative" }),
                }}
                backStyle={{ background: "gray" }}
                flipTrigger={disabled ? "disabled" : "onClick"}
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
