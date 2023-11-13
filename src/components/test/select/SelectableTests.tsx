import { Stack, ButtonGroup, Button } from "@mui/material";
import { useSetAtom } from "jotai";

import { TEST } from "../../../constants/test";
import { currentExamAtom } from "../../../stores/test";
import { RawExamData } from "../../../types/test";

const parseExam = (exam: RawExamData) => {
  let id = 0;
  const shareList: string[] = [];
  const passageList: string[] = [];

  const parsed = exam.map((group) => {
    let shareIndex = 0;

    if (shareList.includes(group.share)) {
      shareIndex = shareList.findIndex((share) => share === group.share);
    } else {
      shareList.push(group.share);
      shareIndex = shareList.length - 1;
    }

    return group.questions.map((item) => {
      id += 1;
      let passageIndex = 0;

      if ("P" in item) {
        if (passageList.includes(item.P)) {
          passageIndex = passageList.findIndex((passage) => passage === item.P);
        } else {
          passageList.push(item.P);
          passageIndex = passageList.length - 1;
        }

        return {
          id,
          share: shareIndex,
          passage: passageIndex,
          question: item.Q,
        };
      }

      if (group.type === "withPassage") {
        if (passageList.includes(group.passage)) {
          passageIndex = passageList.findIndex((passage) => passage === group.passage);
        } else {
          passageList.push(group.passage);
          passageIndex = passageList.length - 1;
        }

        return {
          id,
          share: shareIndex,
          passage: passageIndex,
          question: item.Q,
          answers: item.A,
        };
      }

      return {
        id,
        share: shareIndex,
        question: item.Q,
        answers: item.A,
      };
    });
  });

  return {
    shareList,
    passageList,
    exam: parsed.flat(),
  };
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
              setCurrentExam({
                title: item.title,
                contents: parseExam(item.exam),
                answers: item.answer,
              });
            }}
          >
            {item.title}
          </Button>
        </ButtonGroup>
      ))}
    </Stack>
  );
};
