import { Box, Paper, Typography } from "@mui/material";
import CountDown from "count-down-react";
import moment from "moment";

const 접수시작 = moment(202311060900, "YYYYMMDDhhmm");
// const 접수마감 = moment(202311101600, "YYYYMMDDhhmm");
// const 입실시간 = moment(202311191440, "YYYYMMDDhhmm");
// const 시험일 = moment(202311191500, "YYYYMMDDhhmm");

export const CountdownBlock = () => {
    return (
        <Box>
            <Paper sx={{ p: 1, fontSize: "2rem" }}>
                <Typography
                    variant="h5"
                    p={1}
                    fontWeight={700}
                >
                    접수일까지
                </Typography>
                <Paper
                    sx={{
                        p: 1,
                        textAlign: "center",
                        fontFamily: "kenny",
                        backgroundColor: "primary.dark",
                        color: "white",
                    }}
                >
                    <CountDown
                        date={접수시작.toDate()}
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
                                {days}D {String(hours).padStart(2, "0")}h{" "}
                                {String(minutes).padStart(2, "0")}m{" "}
                                {String(seconds).padStart(2, "0")}s
                            </>
                        )}
                    />
                </Paper>
            </Paper>
        </Box>
    );
};
