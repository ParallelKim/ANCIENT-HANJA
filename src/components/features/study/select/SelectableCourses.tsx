import { Box, Button, Stack } from "@mui/material";
import { useSetAtom } from "jotai";
import { COURSE } from "../../../../config/constants/course";
import { currentCourseAtom } from "../../../../stores/course";
import { Course } from "../../../../types/card";

interface SelectableCoursesProps {
  setPreview: (course: Course | null) => void;
}

export const SelectableCourses = ({ setPreview }: SelectableCoursesProps) => {
  const setCurrentCourse = useSetAtom(currentCourseAtom);

  return (
    <Stack gap={2}>
      {Object.entries(COURSE).map(([title, contents]) => (
        <Box key={title}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setCurrentCourse(title);
            }}
            onMouseEnter={() => setPreview({ title, contents })}
            onMouseLeave={() => setPreview(null)}
          >
            {title}
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
