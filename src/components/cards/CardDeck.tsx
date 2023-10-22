import { Box, ButtonGroup, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useAtom } from "jotai";

import { FlashCard } from "./FlashCard";
import { CARD } from "../../types/card";
import { currentIndexAtom } from "../../stores/atoms";

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

export const CardDeck = ({ cards }: { cards: CARD[] }) => {
    const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
    const currentCard = cards[cards.length - currentIndex - 1];

    const iconsInfos = [
        {
            icon: <ArrowBack />,
            label: "arrow-back",
            onClick: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
            disabled: currentIndex === 0,
        },
        {
            icon: <AutoStoriesIcon />,
            label: "auto-stories-icon",
            href: `https://hanja.dict.naver.com/#/search?query=${currentCard.back}`,
        },
        {
            icon: <ArrowForward />,
            label: "arrow-forward",
            onClick: () =>
                setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1)),
            disabled: currentIndex === cards.length - 1,
        },
    ];

    return (
        <Box
            px={2}
            position="relative"
        >
            <FlashCard card={currentCard} />
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
                            size="large"
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
        </Box>
    );
};
