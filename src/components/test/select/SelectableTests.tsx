import { Stack, ButtonGroup, Button } from "@mui/material";
import { useSetAtom } from "jotai";

import { TEST } from "../../../constants/test";
import { currentExamAtom } from "../../../stores/test";

export const SelectableTests = () => {
  const setCurrentExam = useSetAtom(currentExamAtom);

  return (
    <Stack gap={2} direction="row" justifyContent="center">
      {TEST.map((item) => (
        <ButtonGroup key={item.title} sx={{ justifyContent: "center" }}>
          <Button variant="contained" size="medium" onClick={() => setCurrentExam(item.title)}>
            {item.title}
          </Button>
        </ButtonGroup>
      ))}
    </Stack>
  );
};
