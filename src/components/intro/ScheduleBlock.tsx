import { Box, Link, Paper, Typography } from "@mui/material";
import { ScheduleCountdown } from "./ScheduleCountdown";
// import { nearest } from "../../constants/schedules";
import { useEffect, useState } from "react";
import { GOOGLE_CALENDER } from "../../constants/externalURL";
import { SCHEDULES } from "../../constants/schedules";
import { scheduler } from "../../utils";

// 날짜 문자열을 Date 객체로 변환하는 함수
const parseScheduleDate = (dateStr: string): Date => {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  const hour = dateStr.slice(8, 10);
  const minute = dateStr.slice(10, 12);
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
};

export const ScheduleBlock = () => {
  const [nearest, setNearest] = useState(SCHEDULES[0]);

  useEffect(() => {
    const now = new Date();

    // 현재 시간보다 이후인 일정들 필터링
    const upcomingSchedules = SCHEDULES.filter((schedule) => parseScheduleDate(schedule.date) > now);

    // 현재 진행 중인 이벤트 찾기 (접수 시작과 마감 사이)
    const currentEventIndex = SCHEDULES.findIndex((schedule, index) => {
      const currentDate = parseScheduleDate(schedule.date);
      const nextDate = SCHEDULES[index + 1] ? parseScheduleDate(SCHEDULES[index + 1].date) : null;

      return currentDate <= now && (!nextDate || nextDate > now);
    });

    // 다음 일정 결정
    const nextSchedule =
      currentEventIndex !== -1
        ? (SCHEDULES[currentEventIndex + 1] ?? SCHEDULES[currentEventIndex])
        : (upcomingSchedules[0] ?? SCHEDULES[SCHEDULES.length - 1]);

    if (nextSchedule) {
      // 스케줄러 설정
      scheduler(parseScheduleDate(nextSchedule.date).toISOString(), () => {
        const nextIdx = SCHEDULES.findIndex((s) => s === nextSchedule);
        const following = SCHEDULES[nextIdx + 1] ?? SCHEDULES[nextIdx];
        setNearest(following);
      });

      setNearest(nextSchedule);
    }
  }, []);

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
