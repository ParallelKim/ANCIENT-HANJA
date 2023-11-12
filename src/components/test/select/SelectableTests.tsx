import { Stack, ButtonGroup, Button } from "@mui/material";
import { useSetAtom } from "jotai";

import { currentCourseAtom } from "../../../stores/course";
import { TEST } from "../../../constants/test";

export const SelectableCourses = () => {
  const setCurrentCardSet = useSetAtom(currentCourseAtom);

  return (
    <Stack gap={2} direction="row" justifyContent="center">
      {TEST.map((item) => (
        <ButtonGroup key={item.title} sx={{ justifyContent: "center" }}>
          <Button variant="contained" size="medium" onClick={() => setCurrentCardSet(item)}>
            {item.title}
          </Button>
        </ButtonGroup>
      ))}
    </Stack>
  );
};
