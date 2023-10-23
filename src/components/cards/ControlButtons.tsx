import { ButtonGroup, IconButton, Paper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
    changeCurrentIndexAtom,
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
    const changeCurrentIndex = useSetAtom(changeCurrentIndexAtom);

    const iconsInfos = [
        {
            icon: <ArrowBack fontSize="large" />,
            label: "arrow-back",
            onClick: () => changeCurrentIndex("prev"),
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
            onClick: () => changeCurrentIndex("next"),
            disabled: currentIndex >= currentCardSetLength - 1,
        },
    ];

    return (
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
    );
};
