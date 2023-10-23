import ReactFlipCard from "reactjs-flip-card";
import { CARD } from "../../types/card";
import { Paper, Typography } from "@mui/material";

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

export const FlashCard = ({
    card,
    disabled,
}: {
    card: CARD;
    disabled?: boolean;
}) => {
    const styles = {
        container: { width: "100%", height: "unset", aspectRatio: 1 },
        card: { background: "gray", color: "white", borderRadius: 20 },
    };

    return (
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
                <StyledCard>{card ? card.front : "404"}</StyledCard>
            }
            backComponent={<StyledCard>{card ? card.back : "404"}</StyledCard>}
        />
    );
};
