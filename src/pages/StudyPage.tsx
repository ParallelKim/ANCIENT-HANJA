import { Container } from "@mui/material";
import { useAtomValue } from "jotai";

import { CurrentRun } from "../components/features/study/CurrentRun";
import { SelectStudySet } from "../components/features/study/select/SelectStudySet";
import { CurrentRunManager } from "../managers/CurrentRunManager";
import { currentCourseAtom } from "../stores/course";

const StudyPage = () => {
  const currentCourse = useAtomValue(currentCourseAtom);

  return (
    <Container id="study-page">
      <CurrentRunManager />
      {currentCourse ? <CurrentRun /> : <SelectStudySet />}
    </Container>
  );
};

export default StudyPage;
