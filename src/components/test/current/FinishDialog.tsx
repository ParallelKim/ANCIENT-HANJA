import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export const FinishDialog = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (arg: boolean) => void }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">시험을 끝내고 채점하겠습니까?</DialogTitle>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>확인</Button>
        <Button onClick={() => setIsOpen(false)} autoFocus>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};
