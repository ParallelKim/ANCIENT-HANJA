import { useState } from "react";

import { ControlButtons } from "./current/ControlButtons";
import { Question } from "./current/Question";
import { StatusBar } from "./current/StatusBar";
import { CheckAnswer } from "./current/CheckAnswer";
import { FinishDialog } from "./current/FinishDialog";
import { CurrentTestManager } from "../../managers/CurrentTestManager";

export const CurrentRun = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CurrentTestManager />
      <StatusBar />
      <Question />
      <CheckAnswer />
      <ControlButtons setIsOpen={setIsOpen} />
      <FinishDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
