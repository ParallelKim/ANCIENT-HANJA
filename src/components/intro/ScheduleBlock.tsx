import { Box, Link, Paper, Typography } from "@mui/material";
import { ScheduleCountdown } from "./ScheduleCountdown";
// import { nearest } from "../../constants/schedules";
import { GOOGLE_CALENDER } from "../../constants/externalURL";
import { nearest } from "../../constants/schedules";

export const ScheduleBlock = () => {
  return (
    <Box>
      <Paper sx={{ p: 1, fontSize: { md: "3rem", xs: "2rem" } }}>
        <Typography variant="h5" p={1} fontWeight={700}>
          {nearest.eventName}까지
        </Typography>
        <ScheduleCountdown />
        <Typography variant="h6" mt={1} p={1} fontWeight={700} textAlign="center">
          <Link underline="hover" target="_blank" href={GOOGLE_CALENDER}>
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
