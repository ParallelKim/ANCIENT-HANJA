import { useSetAtom } from "jotai";

import { Button, Paper, Stack } from "@mui/material";
import { currentCardSetAtom, currentClassAtom } from "../../stores/atoms";
import chars1 from "../../assets/chars1.json";
import chars2 from "../../assets/chars2.json";
import words1 from "../../assets/words1.json";
import words2 from "../../assets/words2.json";

const SELECTABLE = [
    { label: "한자 1", set: chars1 },
    { label: "한자 2", set: chars2 },
    { label: "단어 1", set: words1 },
    { label: "단어 2", set: words2 },
];

export const SelectStudySet = () => {
    const setCurrentCardSet = useSetAtom(currentClassAtom);

    return (
        <Paper>
            <Stack>
                {SELECTABLE.map((btn) => (
                    <Button
                        key={btn.label}
                        onClick={() =>
                            setCurrentCardSet(
                                btn.set.map((card, idx) => ({
                                    id: `${btn.label} - ${idx}`,
                                    ...card,
                                }))
                            )
                        }
                    >
                        {btn.label}
                    </Button>
                ))}
            </Stack>
        </Paper>
    );
};
