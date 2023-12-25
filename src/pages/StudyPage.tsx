import { useAtomValue } from "jotai";
import { Container } from "@mui/material";

import { SelectStudySet } from "../components/study/select/SelectStudySet";
import { CurrentRun } from "../components/study/CurrentRun";
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
