import { useAtomValue } from "jotai";
import { Container } from "@mui/material";

import { StatusBar } from "../components/study/cards/StatusBar";
import { ControlButtons } from "../components/study/cards/ControlButtons";
import { FlashCard } from "../components/study/cards/FlashCard";
import { CurrentRunManager } from "../managers/CurrentRunManager";
import { SelectStudySet } from "../components/study/select/SelectStudySet";
import { currentCardSetAtom } from "../stores/atoms";
// import { SessionManager } from "../managers/SessionManager";

export const StudyPage = () => {
  const currentCardSet = useAtomValue(currentCardSetAtom);

  return (
    <Container id="study-page">
      {/* <SessionManager /> */}
      <CurrentRunManager />
      {currentCardSet.length > 0 ? (
        <>
          <StatusBar />
          <FlashCard />
          <ControlButtons />
        </>
      ) : (
        <SelectStudySet />
      )}
    </Container>
  );
};
