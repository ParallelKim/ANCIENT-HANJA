import { Box, Link, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GOOGLE_CALENDER } from "../../../config/constants/externalURL";
import { SCHEDULES } from "../../../config/constants/schedules";
import { scheduler } from "../../../utils";
import { ScheduleCountdown } from "./ScheduleCountdown";

export const ScheduleBlock = () => {
  const [nearest, setNearest] = useState(SCHEDULES[0]);

  useEffect(() => {
    SCHEDULES.forEach((SCHEDULE, idx) => {
      scheduler(SCHEDULE.date, () => {
        const next = SCHEDULES[idx + 1] ?? SCHEDULES[idx];

        setNearest(next);
      });
    });
  }, [nearest]);

  return (
    <Box>
      <Paper sx={{ p: 1, fontSize: { md: "3rem", xs: "2rem" } }}>
        <Typography variant="h5" p={1} fontWeight={700}>
          {nearest.eventName}까지
        </Typography>
        <ScheduleCountdown nearest={nearest} />
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
