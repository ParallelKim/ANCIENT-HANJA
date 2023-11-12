import { Stack, ButtonGroup, Button } from "@mui/material";
import { useSetAtom } from "jotai";

import { TEST } from "../../../constants/test";
import { currentExamAtom } from "../../../stores/test";
import { RawExamData } from "../../../types/test";

const parseExam = (exam: RawExamData) => {
  let id = 0;

  return exam
    .map((group) =>
      group.questions.map((item) => {
        id += 1;

        if (typeof item === "string")
          // shortAnswer
          return {
            id: id,
            share: group.share,
            question: item,
          };

        if (group.type === "multipleChoice")
          return {
            id: id,
            share: group.share,
            question: item.Q,
            answers: item.A,
          };

        if (group.type === "withPassage")
          return {
            id: id,
            share: group.share,
            passage: group.passage,
            question: item.Q,
            answers: item.A,
          };
      }),
    )
    .flat();
};

export const SelectableTests = () => {
  const setCurrentExam = useSetAtom(currentExamAtom);

  return (
    <Stack gap={2} direction="row" justifyContent="center">
      {TEST.map((item) => (
        <ButtonGroup key={item.title} sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              console.log(parseExam(item.exam));
            }}
          >
            {item.title}
          </Button>
        </ButtonGroup>
      ))}
    </Stack>
  );
};
