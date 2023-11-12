import { useAtomValue } from "jotai";
import { Container } from "@mui/material";

import { SelectTest } from "../components/test/select/SelectTest";
import { CurrentRun } from "../components/test/CurrentRun";
import { CurrentRunManager } from "../managers/CurrentRunManager";
import { currentExamAtom } from "../stores/test";

const TestPage = () => {
  const currentExam = useAtomValue(currentExamAtom);

  return (
    <Container
      id="test-page"
      sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", pb: 4 }}
    >
      <CurrentRunManager />
      {currentExam ? <CurrentRun /> : <SelectTest />}
    </Container>
  );
};

export default TestPage;
