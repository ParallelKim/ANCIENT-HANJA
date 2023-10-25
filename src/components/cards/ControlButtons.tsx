import { useAtomValue, useSetAtom } from "jotai";
import { Box, ButtonGroup, IconButton, Paper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import {
    moveCurrentIndexAtom,
    currentCardAtom,
    currentCardSetLengthAtom,
    currentIndexAtom,
} from "../../stores/atoms";

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
    const currentIndex = useAtomValue(currentIndexAtom);
    const currentCard = useAtomValue(currentCardAtom);
    const currentCardSetLength = useAtomValue(currentCardSetLengthAtom);
    const moveCurrentIndex = useSetAtom(moveCurrentIndexAtom);

    const iconsInfos = [
        {
            icon: <ArrowBack fontSize="large" />,
            label: "arrow-back",
            onClick: () => moveCurrentIndex("prev"),
            disabled: currentIndex === 0,
        },
        {
            icon: <AutoStoriesIcon fontSize="large" />,
            label: "auto-stories-icon",
            href:
                currentCard &&
                `https://hanja.dict.naver.com/#/search?query=${currentCard.front}`,
            disabled: !currentCard,
        },
        {
            icon: <ArrowForward fontSize="large" />,
            label: "arrow-forward",
            onClick: () => moveCurrentIndex("next"),
            disabled: currentIndex >= currentCardSetLength - 1,
        },
    ];

    return (
        <Box px={2}>
            <Paper>
                <ButtonGroup
                    sx={SX.BT_GROUP}
                    variant="contained"
                    aria-label="outlined button group"
                >
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
