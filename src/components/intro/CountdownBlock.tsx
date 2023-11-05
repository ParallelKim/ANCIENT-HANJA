import { Box, Link, Paper, Typography } from "@mui/material";
import CountDown from "count-down-react";
import moment from "moment";

// const 접수시작 = moment(202311060900, "YYYYMMDDhhmm");
const 접수마감 = moment(202311101600, "YYYYMMDDhhmm");
// const 입실시간 = moment(202311191440, "YYYYMMDDhhmm");
// const 시험일 = moment(202311191500, "YYYYMMDDhhmm");

export const CountdownBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 1, fontSize: { md: "3rem", xs: "2rem" } }}>
        <Typography variant="h5" p={1} fontWeight={700}>
          접수 마감까지
        </Typography>
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
            date={접수마감.toDate()}
            renderer={({
              days,
              hours,
              minutes,
              seconds,
            }: {
              days: number;
              hours: number;
              minutes: number;
              seconds: number;
            }) => (
              <>
                {days}D {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m{" "}
                {String(seconds).padStart(2, "0")}s
              </>
            )}
          />
        </Paper>
        <Typography variant="h6" mt={1} p={1} fontWeight={700} textAlign="center">
          <Link
            underline="hover"
            target="_blank"
            href="https://calendar.google.com/calendar/u/0/r?cid=YW5jaWVudC5oYW5qYUBnbWFpbC5jb20"
          >
            구글 캘린더 추가하기
          </Link>
        </Typography>
        <Typography textAlign="center">
          <Link p={1} underline="hover" href="/notice#일정 알림에 관한 공지" fontSize="1rem">
            일정 알림에 관한 공지
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
