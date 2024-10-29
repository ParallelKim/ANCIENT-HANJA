import { useState } from "react";

import { CheckAnswer } from "@/components/features/exam/current/CheckAnswer";
import { ControlButtons } from "@/components/features/exam/current/ControlButtons";
import { FinishDialog } from "@/components/features/exam/current/FinishDialog";
import { Question } from "@/components/features/exam/current/Question";
import { StatusBar } from "@/components/features/exam/current/StatusBar";
import { CurrentTestManager } from "@/managers/CurrentTestManager";

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
