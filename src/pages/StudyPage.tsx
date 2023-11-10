import { useAtomValue } from "jotai";
import { Container } from "@mui/material";

import { SelectStudySet } from "../components/study/select/SelectStudySet";
import { CurrentRun } from "../components/study/CurrentRun";
import { CurrentRunManager } from "../managers/CurrentRunManager";
import { currentCardSetAtom } from "../stores/atoms";

export const StudyPage = () => {
  const currentCardSet = useAtomValue(currentCardSetAtom);

  return (
    <Container id="study-page">
      <CurrentRunManager />
      {currentCardSet.length > 0 ? <CurrentRun /> : <SelectStudySet />}
    </Container>
  );
};
