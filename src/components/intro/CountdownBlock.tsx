import { Box, Divider, Paper, Typography } from "@mui/material";
import CountDown from "count-down-react";
import moment from "moment";

const 접수시작 = moment(202311060900, "YYYYMMDDhhmm");
const 접수마감 = moment(202311101600, "YYYYMMDDhhmm");
const 입실시간 = moment(202311191440, "YYYYMMDDhhmm");
const 시험일 = moment(202311191500, "YYYYMMDDhhmm");

export const CountdownBlock = () => {
    return (
        <Box>
            <Paper sx={{ p: 1, fontSize: "2rem" }}>
                <Typography
                    variant="h5"
                    p={1}
                >
                    접수일까지
                </Typography>
                <Paper
                    sx={{
                        p: 1,
                        textAlign: "center",
                        fontFamily: "kenny",
                        backgroundColor: "rgba(0,0,0,0.9)",
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
                            days: unknown;
                            hours: unknown;
                            minutes: unknown;
                            seconds: unknown;
                        }) => (
                            <>
                                {days}D {hours}h {minutes}m {seconds}s
                            </>
                        )}
                    />
                </Paper>
            </Paper>
        </Box>
    );
};
