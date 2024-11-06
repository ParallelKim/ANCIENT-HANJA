import { Box, Link, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GOOGLE_CALENDER } from "../../../config/constants/externalURL";
import { SCHEDULES } from "../../../config/constants/schedules";
import { scheduler } from "../../../utils";
import { ScheduleCountdown } from "./ScheduleCountdown";

export const ScheduleBlock = () => {
  const [nearest, setNearest] = useState(SCHEDULES[0]);

  useEffect(() => {
    // 현재 시간보다 이후인 일정들만 필터링
    const upcomingSchedules = SCHEDULES.filter((schedule) => new Date(schedule.date) > new Date());

    // 가장 가까운 일정 찾기
    const nextSchedule = upcomingSchedules[0];

    if (nextSchedule) {
      // 다음 일정에 대해서만 스케줄러 설정
      scheduler(nextSchedule.date, () => {
        const nextIdx = SCHEDULES.findIndex((s) => s === nextSchedule);
        const following = SCHEDULES[nextIdx + 1] ?? SCHEDULES[nextIdx];

        setNearest(following);
      });

      // 초기 상태 설정
      setNearest(nextSchedule);
    }
  }, []); // 의존성 배열을 비워서 컴포넌트 마운트 시에만 실행

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
