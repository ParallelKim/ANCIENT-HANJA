import { Fragment } from "react";
import { Stack, Typography, ButtonGroup, Button } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useSetAtom } from "jotai";

import { currentCourseAtom } from "../../../stores/course";
import { CATEGORIES } from "../../../constants/course";
import { Course } from "../../../types/card";

export const SelectableCourses = ({ setPreview }: { setPreview: (course: Course) => void }) => {
  const setCurrentCardSet = useSetAtom(currentCourseAtom);

  return (
    <Stack gap={2} justifyContent="center">
      {CATEGORIES.map((cat, idx) => (
        <Fragment key={cat.label + idx}>
          <Typography variant="h6" fontWeight={700}>
            {cat.label}
          </Typography>
          <Stack gap={2} direction="row" justifyContent="center">
            {cat.list.map((item) => (
              <ButtonGroup key={item.title} sx={{ justifyContent: "center" }}>
                <Button variant="contained" size="medium" onClick={() => setCurrentCardSet(item.title)}>
                  {item.title}
                </Button>
                <Button size="small" color="primary" onClick={() => setPreview(item)}>
                  <ManageSearchIcon />
                </Button>
              </ButtonGroup>
            ))}
          </Stack>
        </Fragment>
      ))}
    </Stack>
  );
};
