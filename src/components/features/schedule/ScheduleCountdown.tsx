import { Paper } from "@mui/material";
import CountDown from "count-down-react";
import moment from "moment";

type DateType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const ScheduleCountdown = ({ nearest }: { nearest: { date: string } }) => {
  return (
    <Paper
      sx={{
        p: 1,
        textAlign: "center",
        fontFamily: "calculator",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <CountDown
        date={moment(nearest.date, "YYYYMMDDhhmm").toDate()}
        renderer={({ days, hours, minutes, seconds }: DateType) => {
          const total = days + hours + minutes + seconds;

          if (!total) return <>--D --h --m --s</>;
          return (
            <>
              {days}D {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m{" "}
              {String(seconds).padStart(2, "0")}s
            </>
          );
        }}
      />
    </Paper>
  );
};
