import { Link, Stack, Typography } from "@mui/material";

export const noticeList = [
    {
        title: "사이트 방침에 대한 공지",
        content: (
            <Typography
                whiteSpace="pre-line"
                sx={{ wordBreak: "break-word" }}
            >{`본 사이트는 개인적 공부를 위해 만들어졌습니다
                유료 기능을 추가한다거나 하는 일은 없을 것입니다
                
                해당 프로젝트는 깃허브 링크를 공개하는 오픈 소스입니다
                학습이나 상업적 이용을 위해 소스를 복제하는 것은 자유지만
                그로 인해 발생하는 일에 대한 책임은 복제자 본인에게 있습니다

                혹여나 기여나 팀으로 참여하고 싶은 분이 있으시다면
                편하게 연락 바랍니다
        `}</Typography>
        ),
    },
    {
        title: "자료 출처",
        content: (
            <Stack color="primary.main">
                {[
                    {
                        label: "카카오톡 아이콘",
                        url: "https://marshall-ku.tistory.com/204",
                    },
                    {
                        label: "한자 데이터 1",
                        url: "https://quizlet.com/802668244/%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90-%ED%95%9C%EC%9E%90%EC%8B%9C%ED%97%98-flash-cards/",
                    },
                    {
                        label: "한자 데이터 2",
                        url: "https://quizlet.com/kr/216112185/%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90-%ED%95%9C%EC%9E%90%EC%8B%9C%ED%97%98-flash-cards/",
                    },
                    {
                        label: "한자 데이터 3",
                        url: "https://quizlet.com/kr/177828443/%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90-%EC%A1%B8%EC%97%85%ED%95%9C%EC%9E%90-flash-cards/",
                    },
                ].map((link) => {
                    return (
                        <a
                            href={link.url}
                            target="_blank"
                            key={link.label}
                            color="inherit"
                        >
                            {link.label}
                        </a>
                    );
                })}
            </Stack>
        ),
    },
];
