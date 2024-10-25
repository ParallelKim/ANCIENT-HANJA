import { Box, Link, Stack, Typography } from "@mui/material";
import { CREDITS, NOTICE_LINK } from "./externalURL";

export const noticeList = [
  {
    title: "서비스 소개",
    content: (
      <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
        {`안녕하세요~
        
        졸업을 위한 교내 한자 시험이 너무 막막했습니다
        특강을 듣거나 교재를 구하기 어려운 상황에 검색해도 잘 정리된 자료가 나오지도 않았거든요
        특히 단순 암기를 잘 못하고 머리도 좋지 못해 걱정이 많았습니다

        고파스에서 검색해서 찾은 퀴즐렛을 써봤어요
        그런데 아예 모르는 상태로 플래시카드에 한자랑 뜻 적힌 걸 보는 걸로는 머리에 잘 안들어오더라구요
        그래서 한자 사전을 연결해 유래를 보면서 하니까 좀 눈에 들어옵니다

        혼자 쓰려고 만들었는데 만든 김에 학우 분들에게도 공유하려고 이것저것 추가하다 보니 생각보다 시간이 걸리네요
        사실 목표로 하고 있던 기능들을 다 구현하진 못했지만 베타 버전 같은 느낌으로 우선 공개하려고 합니다
        지하철 타고 이동하면서 사용하려고 만든 거라 모바일 버전으로 먼저 제작중이에요

        본 서비스는 개인적 공부를 위해 만들어졌습니다
        유료 기능을 추가한다거나, 광고를 받는 등의 일은 없을 것입니다

        이 프로젝트는 깃허브 링크를 공개하는 오픈 소스입니다
        학습이나 상업적 이용을 위해 소스를 복제하는 것은 자유지만 그로 인해 발생하는 일에 대한 책임은 복제자 본인에게 있습니다

        혹여나 팀에 참여하여 프로젝트에 기여하고 싶은 분이 있으시다면 편하게 연락 바랍니다
        
        다들 한자 시험 잘 보셨으면 좋겠네요
        오늘도 좋은 하루 되세요`}
      </Typography>
    ),
  },
  {
    title: "자료 출처에 관한 공지",
    content: (
      <Box>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`지금 고대한자에서 사용되는 데이터는 퀴즐렛에서 "고려대학교 한자"를 검색해서 나온 데이터와 친구에게 공유 받은 데이터를 검수 없이 사용하고 있습니다
          그래서 오류가 있거나 세트끼리 중복되는 부분이 있을 거에요 ㅠ..

          빠른 시일 내로 교재와 기출문제 데이터를 검토해 자료 퀄리티를 올리고
          카테고리 별 퀴즈 목록 등을 지원하겠습니다

          추가로 퀴즐렛에서 공부하시는 게 더 편한 학우님들을 위해
          해당 퀴즈 링크들도 올려두었습니다
          
          `}
        </Typography>
        <Stack color="primary.main">
          {CREDITS.map((credit) => {
            return (
              <Link href={credit.url} target="_blank" key={credit.label} rel="noreferrer" underline="hover">
                {credit.label}
              </Link>
            );
          })}
        </Stack>
      </Box>
    ),
  },
  // {
  //   title: "업데이트 예정 기능",
  //   content: (
  //     <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
  //       {`1. 학습 진행도 저장 기능
  //       2. 어려운 단어, 쉬운 단어 선택 후 학습 빈도 조절
  //       3. 기출 문제를 풀어볼 수 있는 모의 테스트`}
  //     </Typography>
  //   ),
  // },
  {
    title: "일정 알림에 관한 공지",
    content: (
      <Stack gap={1}>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`일정 정보의 출처는 당연하게도 `}
          <Link href={NOTICE_LINK} target="_blank" underline="hover">
            한자한문연구소
          </Link>
          입니다
        </Typography>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`고대한자는 이번에 진행되는 제 75회 한자이해능력인증시험의 일정을
          총 3가지 방법을 통해 공지할 예정입니다

          1. 웹 사이트 자체 알림
          2. 구글 캘린더 공유
          3. 공지용 인스타그램
          
          셋 중 편하신 방법을 이용하셔서 
          시험 일정 놓치지 않으시길 바라요

          `}
        </Typography>
        <Typography variant="h6" whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          웹 사이트 알림에 대한 설명
        </Typography>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`웹 사이트 알림을 받기 위해서는 도메인에 대한 알림을 허용해야 합니다
          문제는 한 번 허용했을 경우, 웹 사이트에서는 그 권한을 제거할 방법이 없으며
          사용하시는 브라우저 설정에 들어가 직접 권한을 제거해주셔야 합니다 ㅠ..`}
        </Typography>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`추후 업데이트를 통해 최신 업데이트 내용, 주간 랭킹 등의 내용을 
          웹 사이트 알림을 통해 알려드릴까 해요
          알림의 종류별로 원하시는 알림만 받아보실 수 있도록 구현하겠습니다
          
          다만, 빠르게 구현할 기능은 아니기에 우선은 세 방법 중 편하신 방법만 이용하셔도 
          시험 관련 일정을 확인하시는 데에 불편 없으시도록 약속하겠습니다
          
          `}
        </Typography>
        <Typography variant="h6" whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          인스타그램 공지에 대한 설명
        </Typography>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`인스타그램에서는 게시글을 통해서는 업데이트 등, 
          덜 중요하거나 서비스에 대한 내용을 올리고,
          스토리를 통해서는 일정 등의 최우선 내용에 대한 공지를 올릴 예정입니다
          
          더 쉽게 인지하실 수 있도록, 
          친한 친구 스토리 기능을 이용하기 위해 
          해당 계정을 팔로우하시는 학우님들께 맞팔로우 요청을 보낼 것입니다
          팔로우 요청이 온다 하더라도 너무 놀라지 않길 바라요
          
          학우님들의 사생활을 침해하거나 개인정보를 악용하지 않을 것입니다
          그럼에도 맞팔로우를 허용하기 꺼려지시는 학우님이 있으실 것이라 생각하며 충분히 이해합니다

          친한 친구 스토리와 일반 스토리로 모두 공지드려 맞팔로우 여부와 관계없이 일정 확인하실 수 있게 하겠습니다
          팔로우 하는 것 자체도 꺼려지시는 분이 있으실 것 같아 구글 캘린더를 통한 공지 또한 제공합니다
          
          `}
        </Typography>
        <Typography variant="h6" whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          구글 캘린더에 대한 설명
        </Typography>
        <Typography whiteSpace="pre-line" sx={{ wordBreak: "break-word" }}>
          {`메인 페이지의 링크를 통해 해당 캘린더를 학우님의 구글 캘린더에 추가할 수 있어요 
          현재 75회 시험에 대한 일정과, 일정에 대한 알림이 미리 설정되어 있습니다 
          이후 시험에 대한 알림이 필요 없으시다면 캘린더를 제거하시면 됩니다`}
        </Typography>
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
