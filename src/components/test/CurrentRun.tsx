import { ControlButtons } from "./current/ControlButtons";
import { Question } from "./current/Question";
import { StatusBar } from "./current/StatusBar";
import { CheckAnswer } from "./current/CheckAnswer";

export const CurrentRun = () => {
  return (
    <>
      <StatusBar />
      <Question />
      <CheckAnswer />
      <ControlButtons />
    </>
  );
};
