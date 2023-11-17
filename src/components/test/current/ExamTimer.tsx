import { Paper } from "@mui/material";
import CountDown from "count-down-react";
import moment from "moment";

type DateType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const ExamTimer = () => {
  return (
    <Paper
      sx={{
        p: 1,
        textAlign: "center",
        fontFamily: "calculator",
        backgroundColor: "primary.main",
        color: "white",
        fontSize: "1.5rem",
      }}
    >
      <CountDown
        date={moment(new Date(Date.now() + 3600000), "YYYYMMDDhhmm").toDate()}
        renderer={({ hours, minutes, seconds }: DateType) => (
          <>
            {hours}h {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s
          </>
        )}
      />
    </Paper>
  );
};
