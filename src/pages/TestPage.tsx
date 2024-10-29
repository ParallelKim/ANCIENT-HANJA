import { Container } from "@mui/material";
import { useAtomValue } from "jotai";

import { CurrentRun } from "@/components/features/exam/current/CurrentRun";
import { SelectTest } from "@/components/features/exam/select/SelectTest";
import { currentExamAtom } from "@/stores/test";

const TestPage = () => {
  const currentExam = useAtomValue(currentExamAtom);

  return (
    <Container
      id="test-page"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pb: 4,
        overflowY: "scroll",
      }}
    >
      {currentExam ? <CurrentRun /> : <SelectTest />}
    </Container>
  );
};

export default TestPage;
