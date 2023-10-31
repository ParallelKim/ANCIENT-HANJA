import { Stack, Typography } from "@mui/material";

export const noticeList = [
    {
        title: "사이트 방침에 대한 공지",
        content: (
            <Typography
                whiteSpace="pre-line"
                sx={{ wordBreak: "break-word" }}
            >{`본 서비스는 개인적 공부를 위해 만들어졌습니다
                유료 기능을 추가한다거나 유료 광고를 받는 등의 일은 없을 것입니다
                
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
                    {
                        label: "계산기 폰트",
                        url: "https://www.bvfonts.com/fonts/details.php?id=18",
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
    // {
    //     title: "진행도 저장에 관한 공지",
    //     content: (
    //         <Typography
    //             className="progress"
    //             whiteSpace="pre-line"
    //             sx={{ wordBreak: "break-word" }}
    //         >{`본 서비스는 진행도 저장을 위해 크게 3가지 방법을 사용합니다.

    //         1. 구글 로그인
    //         2. 기기에 저장
    //         3. url 주소에 저장

    //         만일 구글 로그인을 사용하기 꺼려진다면 주소를 통해 진행도를 저장할 수 있습니다.
    //         예) https://ancient-hanja.web.app/study/#id=%225e8694f4-2adc-b289-f138-3ac57010278d%22

    //         위처럼 id가 포함된 주소로 서비스에 접근하면 해당 id의 정보를 불러옵니다.
    //         이를 통해 다른 기기에 공유하거나, 진행도가 초기화되었을 때 다시 진행도를 불러올 수 있습니다.

    //         어떤 방법을 사용하시더라도 모든 기능을 이용하실 수 있으며, 여러 방법을 동시에 사용할 수도 있습니다.

    //         단, 기기에 저장하여 사용할 때 브라우저의 데이터가 지워진다면 진행도 역시 초기화될 수 있습니다.
    //         주소를 이용해 저장할 때는, 타인이 해당 주소를 알아낸다면 진행도를 공유하게 됩니다.

    //         따라서 가장 권장하는 것은 구글 소셜 로그인입니다.
    //         본 서비스는 이메일 등 사용자의 개인정보를 상업적으로 이용하지 않을 것입니다.
    // `}</Typography>
    //     ),
    // },
];
