import { ControlButtons } from "./cards/ControlButtons";
import { FlashCard } from "./cards/FlashCard";
import { StatusBar } from "./cards/StatusBar";

export const CurrentRun = () => {
  return (
    <>
      <StatusBar />
      <FlashCard />
      <ControlButtons />
    </>
  );
};
