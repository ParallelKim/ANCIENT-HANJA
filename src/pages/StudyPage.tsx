import { useAtomValue } from "jotai";
import { Container } from "@mui/material";

import { SelectStudySet } from "../components/study/SelectStudySet";
import { CurrentRun } from "../components/study/CurrentRun";
import { currentCardSetAtom } from "../stores/atoms";
import { CurrentRunManager } from "../managers/CurrentRunManager";

export const StudyPage = () => {
  const currentCardSet = useAtomValue(currentCardSetAtom);

  return (
    <Container id="study-page">
      <CurrentRunManager />
      {currentCardSet.length > 0 ? <CurrentRun /> : <SelectStudySet />}
    </Container>
  );
};
