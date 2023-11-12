import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { gradeUserAnswerAtom } from "../../../stores/test";

export const FinishDialog = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (arg: boolean) => void }) => {
  const gradeUserAnswer = useSetAtom(gradeUserAnswerAtom);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">시험을 끝내고 채점하겠습니까?</DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            setIsOpen(false);
            gradeUserAnswer();
          }}
          autoFocus
        >
          확인
        </Button>
        <Button onClick={() => setIsOpen(false)}>취소</Button>
      </DialogActions>
    </Dialog>
  );
};
