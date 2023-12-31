import { RawExamData } from "../types/test";

export const TEST: { title: string; exam: RawExamData; answer: (string | number)[] }[] = [
  {
    title: "50회 모의고사",
    exam: [
      {
        type: "multipleChoice",
        share: "다음 한자의 독음이 바른 것은?",
        questions: [
          {
            Q: "佳",
            A: ["규", "가", "고", "기"],
          },
          {
            Q: "鳴",
            A: ["오", "학", "조", "명"],
          },
          {
            Q: "望",
            A: ["장", "원", "망", "삭"],
          },
          {
            Q: "恕",
            A: ["노", "서", "여", "공"],
          },
          {
            Q: "池",
            A: ["지", "연", "당", "야"],
          },
          {
            Q: "捕",
            A: ["보", "모", "호", "포"],
          },
          {
            Q: "晩",
            A: ["만", "일", "면", "혼"],
          },
          {
            Q: "覺",
            A: ["견", "거", "각", "계"],
          },
          {
            Q: "範",
            A: ["궤", "참", "범", "절"],
          },
          {
            Q: "珍",
            A: ["존", "잔", "전", "진"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음의 독음을 가진 것은?",
        questions: [
          {
            Q: "갑",
            A: ["甲", "由", "用", "申"],
          },
          {
            Q: "열",
            A: ["遣", "十", "逸", "閱"],
          },
          {
            Q: "혈",
            A: ["突", "亭", "血", "陷"],
          },
          {
            Q: "납",
            A: ["寧", "沓", "那", "納"],
          },
          {
            Q: "천",
            A: ["牛", "千", "年", "于"],
          },
          {
            Q: "애",
            A: ["哀", "畏", "衣", "衷"],
          },
          {
            Q: "회",
            A: ["慨", "悔", "惟", "恒"],
          },
          {
            Q: "술",
            A: ["屈", "愚", "述", "醉"],
          },
          {
            Q: "태",
            A: ["犬", "太", "大", "六"],
          },
          {
            Q: "모",
            A: ["暮", "幕", "漠", "膜"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음 한자와 독음이 같은 것은?",
        questions: [
          {
            Q: "卷",
            A: ["泰", "勸", "歡", "秦"],
          },
          {
            Q: "在",
            A: ["坐", "辛", "災", "罪"],
          },
          {
            Q: "修",
            A: ["守", "宇", "宙", "宅"],
          },
          {
            Q: "致",
            A: ["網", "伸", "橫", "置"],
          },
          {
            Q: "孝",
            A: ["郊", "路", "資", "效"],
          },
          {
            Q: "量",
            A: ["良", "埋", "僅", "旦"],
          },
          {
            Q: "尾",
            A: ["眠", "麥", "侮", "美"],
          },
          {
            Q: "筆",
            A: ["獲", "匹", "品", "得"],
          },
          {
            Q: "草",
            A: ["忍", "早", "初", "洋"],
          },
          {
            Q: "半",
            A: ["迷", "連", "邊", "返"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음 한자의 뜻이 바른 것은?",
        questions: [
          {
            Q: "首",
            A: ["머리", "꼬리", "허리", "무릎"],
          },
          {
            Q: "雨",
            A: ["구름", "비", "천둥", "바람"],
          },
          {
            Q: "登",
            A: ["오르다", "멈추다", "뛰다", "넘어지다"],
          },
          {
            Q: "受",
            A: ["만들다", "잃다", "받다", "던지다"],
          },
          {
            Q: "臥",
            A: ["달리다", "앉다", "넘어지다", "눕다"],
          },
          {
            Q: "父",
            A: ["할머니", "아버지", "손자", "며느리"],
          },
          {
            Q: "央",
            A: ["위", "옆", "가운데", "뒤"],
          },
          {
            Q: "殺",
            A: ["자라다", "먹다", "죽이다", "기록하다"],
          },
          {
            Q: "悲",
            A: ["침묵하다", "기쁘다", "말하다", "슬프다"],
          },
          {
            Q: "鹿",
            A: ["나비", "사슴", "고래", "독수리"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음의 뜻을 가진 것은?",
        questions: [
          {
            Q: "쌀",
            A: ["栗", "豆", "梨", "米"],
          },
          {
            Q: "쇠",
            A: ["火", "金", "月", "土"],
          },
          {
            Q: "가을",
            A: ["夏", "冬", "秋", "春"],
          },
          {
            Q: "코",
            A: ["鼻", "眉", "舌", "耳"],
          },
          {
            Q: "놀라다",
            A: ["敦", "驚", "懇", "慕"],
          },
          {
            Q: "머무르다",
            A: ["躍", "伏", "逆", "留"],
          },
          {
            Q: "듣다",
            A: ["聽", "泣", "號", "謂"],
          },
          {
            Q: "굶주리다",
            A: ["食", "飢", "飮", "飯"],
          },
          {
            Q: "흩어지다",
            A: ["添", "察", "散", "附"],
          },
          {
            Q: "감추다",
            A: ["藏", "載", "遲", "俊"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "교육의 공간적 ㉠정의로 ㉡분류하자면 ㉢가정교육이 끝난 후 ㉣학교교육이 시작되고 학교교육이 끝난 후 사회교육이 시작되는 것이 아니다. 교육은 ㉤공간적으로 가정과 학교 그리고 사회에서 ㉥동시다발적으로 일어나는 것이다. 직장에서는 ㉦상사와 선배가 ㉧부하나 후배를 길러서 ㉨이끌어야 직장의 일을 제대로 수행할 수 있으므로, 직장의 상사와 선배는 항상 교육자의 자세로 부하나 후배를 대하여야 한다.",
        questions: [
          {
            Q: "㉠～㉣의 한자표기가 바르지 않은 것은?",
            A: ["㉠定義", "㉡分析", "㉢家庭", "㉣學校"],
          },
          {
            Q: " ㉤‘공간적’의 ‘공’과 같은 한자를 사용한 것은?",
            A: ["空氣", "功勳", "工場", "攻擊"],
          },
          {
            Q: "㉥‘동시다발’을 한자로 표기할 때 사용되지 않은 것은?",
            A: ["同", "時", "多", "廢"],
          },
          {
            Q: "㉦‘상사’와 ㉧‘후배’의 한자 표기를 바르게 짝지은 것은?",
            A: ["上寫 - 後倍", "上司 - 後倍", "上寫 - 後輩", "上司 - 後輩"],
          },
          {
            Q: "㉨‘이끌어야’의 뜻에 가장 가까운 한자어는?",
            A: ["外面", "計策", "引導", "排斥"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠전통을 긍정하는 또 하나 다른 ㉡태도는 ㉢순수 한국적인 것의 모색이다. 한국문화란 한국의 ㉣성격이요, 그 내용은 인류 공동의 세계문화다. 한국문화-민족문화는 세계문화 안의 한국적 ㉤樣式의 발견과 ㉥形成에 있는 것이지 한국 ㉦特有 고립의 것만으로 이루어질 수는 없는 것이다. 한국문화의 ㉧主體가 희미해지는 때에 그러한 순수 한국적인 것을 찾는 것은 의의 있는 방향이라고 할 수가 있겠지만 앞으로의 한국문화 전통의 ㉨전개에 하등의 시대적 의의도 없는, 하나의 세계문화에 아무 새로움도 없는 것을 굉장한 것으로 착각하고 그것이 새로운 인간이나 ⓐ생활의 원형으로 제시되는 등의 ㉩(    ) ㉪復古의 전통긍정 태도도 비판과 경고를 받아야 한다.",
        questions: [
          {
            Q: "㉠～㉣의 한자표기가 바르지 않은 것은?",
            A: ["㉠傳統", "㉡能度", "㉢純粹", "㉣性格"],
          },
          {
            Q: "㉤〜㉧의 독음이 바르지 않은 것은?",
            A: ["㉤양식", "㉥형성", "㉦특유", "㉧주최"],
          },
          {
            Q: "㉨‘전개’의 한자 표기가 바른 것은?",
            A: ["展開", "專改", "專開", "展改"],
          },
          {
            Q: "㉩(  )에 들어갈 말로, ‘주관이나 원칙이 없이 덮어놓고 행동하는’을 뜻하는 것은?",
            A: ["劃期的", "盲目的", "事實的", "夢幻的"],
          },
          {
            Q: "㉪‘復古’의 ‘復’과(와) 독음이 다른 것은?",
            A: ["復舊", "復習", "復興", "復歸"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "배드민턴은 ㉠자신의 능력과 ㉡체력에 맞게 운동량을 ㉢조절할 수 있어 재미와 즐거움을 더할 수 있다. 학교나 가정, 야외에서 누구나 손쉽게 할 수 있고 네트를 사이에 두고 하는 ㉣운동이어서 ㉤危險성이 거의 없어 ㉥安心하고 즐길 수 있다. 공의 무게가 가볍고 ㉦若干의 ㉧訓練을 통해 ㉨기본기를 익히면 누구나 잘할 수 있는 운동이어서 가족 모두가 함께 즐길 수 있다. ㉩넓은 공간이나 복잡한 기구 등이 필요하지 않아 어디서나 즐길 수 있는 장점을 갖고 있다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바른 것은?",
            A: ["㉠自身", "㉡豊力", "㉢周節", "㉣軍動"],
          },
          {
            Q: "㉤〜㉧의 독음이 바르지 않은 것은?",
            A: ["㉤위험", "㉥안심", "㉦약간", "㉧단련"],
          },
          {
            Q: "㉨‘기본’의 ‘기’의 한자 표기가 바른 것은?",
            A: ["豈", "己", "基", "企"],
          },
          {
            Q: "㉩‘넓은’의 뜻을 지닌 한자는? ",
            A: ["曲", "廣", "長", "深"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "스탕달의 소설 <적과 흑>에는 프랑스 복고왕정 시대의 한 ㉠風俗圖가 나온다. ㉡大革命으로 빼앗겼던 권력을 ㉢奪還한 귀족들은 일체 토론하지 않는 방식으로 토론을 ㉣禁止시킨다. 소설의 주인공 줄리앙 소렐은 ㉤천민 출신이지만 뛰어난 ㉥두뇌로 부상하는 새로운 세력을 대표하는 ⓐ인물이 된다. 그는 우여곡절 끝에 그 시대 ㉦최고 권력자의 한 사람으로 그려진 라몰 후작의 비서로 일하며 수많은 ㉧귀족들을 만난다. 소렐은 ㉨기회가 닿을 때마다 ㉩토론을 개시하려 하지만 귀족과 고관대작들은 접시에 코를 박고 ㉪아무런 대답도 없이 음식을 먹을 뿐이다. 그들은 지금 권력을 장악하고 있지만, 자기들의 몰락이 임박했으며, 토론이 그 몰락에 ㉫속도를 덧붙일 것임을 모르지 않았던 것이다. 자신감을 가진 자만이 먼저 말을 걸고 먼저 토론을 시작한다.",
        questions: [
          {
            Q: "㉠～㉣의 독음이 바르지 않은 것은?",
            A: ["㉠풍속도", "㉡대혁명", "㉢탈취", "㉣금지"],
          },
          {
            Q: "㉤‘천민’과 ㉥‘두뇌’의 한자 표기를 바르게 짝지은 것은?",
            A: ["賤民 - 頭腦", "踐民 - 頭腦", "踐民 - 項腦", "賤民 - 項腦"],
          },
          {
            Q: "㉦～㉩의 한자표기가 바르지 않은 것은?",
            A: ["㉦最高", "㉧遺族", "㉨機會", "㉩討論"],
          },
          {
            Q: "㉪‘아무런 대답도 없이’와 가장 관련 있는 한자성어는?",
            A: ["巧言令色", "是是非非", "衆口難防", "黙黙不答"],
          },
          {
            Q: " ㉫‘속도를 덧붙일’의 뜻에 가장 가까운 한자어는?",
            A: ["怠慢", "加速", "傍觀", "減退"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠여야가 함께 ㉡고민해야 할 것은 ㉢점차 ㉣저하되고 있는 ㉤투표율이다. 이는 ㉥選擧 제도 자체에 대한 불신으로 이어지게 마련이다. 여야 ⓐ정당들은 선거법 개정을 통해 유권자를 투표소로 이끌 수 있는 유인책을 마련해야 한다. 투표자가 늘지 않으면 대의제는 위기에 처할 수밖에 없다. 최근 정략적으로 투표 참여를 줄이려는 시도가 있는 바, 이는 당리당략에 ㉦根據한 것으로 자기함정이 될 수도 있다. 유권자의 20% 표도 얻지 못한 당선자가 어떻게 ㉧信賴와 ㉨權威를 가질 수 있겠는가. 선거의 공정성을 더 높이지 않는다면 통치권의 ⓑ정당성은 앞으로 선거가 있을 때마다 시빗거리가 될 지도 모른다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠與野", "㉡告敏", "㉢漸次", "㉣低下"],
          },
          {
            Q: "㉤‘투표율’의 한자 표기가 바른 것은? ",
            A: ["投票率", "役票律", "投表律", "役表率"],
          },
          {
            Q: "㉥〜㉨의 독음이 바르지 않은 것은? ",
            A: ["㉥선거", "㉦근거", "㉧신의", "㉨권위"],
          },
          {
            Q: "ⓐ‘정당’과 ⓑ‘정당성’의 ‘정당’의 한자표기를 순서대로 바르게 짝지은 것은?",
            A: ["政黨 - 政堂", "政堂 - 政黨", "正當 - 政堂", "政黨 - 正當"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "우리나라 전통 마을은 ㉠배산임수를 지형적 ㉡입지 ㉢상황으로 하고 있으며 산록 완사면에 발달했다. 장기간에 걸친 ㉣침식 ㉤작용으로 이루어진 우리나라 지형에서 산들은 윗부분의 ㉥급경사부와 아랫부분의 ㉦완경사부가 경사 변환점에서 ㉧接合되어 있는 모양이 많다. 급경사 부분에는 숲이 있으며 경사 변환점에 주로 ⓐ무덤이 있다. 그리고 완사면에는 ㉨果樹園 또는 뽕밭과 같은 경제림이나 ㉩雜木林이 있다. 완사면의 ㉪末端部이며 산이 평야와 만나는 부분에 마을이 있다.",
        questions: [
          {
            Q: "㉠‘배산임수’를 한자로 표기할 때 사용되지 않은 것은?",
            A: ["背", "山", "任", "水"],
          },
          {
            Q: "㉡～㉤의 한자 표기가 바르지 않은 것은?",
            A: ["㉡立地", "㉢狀況", "㉣浸蝕", "㉤作容"],
          },
          {
            Q: "㉥‘급경사부’의 ‘급’과 ㉦‘완경사부’의 ‘완’의 한자 표기를 순서대로 바르게 짝지은 것은?",
            A: ["及 - 完", "急 - 緩", "急 - 完", "及 - 緩"],
          },
          {
            Q: "㉧～㉪의 독음이 바르지 않은 것은?",
            A: ["㉧접촉", "㉨과수원", "㉩잡목림", "㉪말단부"],
          },
          {
            Q: "ⓐ‘무덤’의 뜻을 지니지 않은 한자는?",
            A: ["墳", "塚", "塵", "墓"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠지조란 것은 순일한 정신을 지키기 위한 불타는 ㉡신념이요, 눈물겨운 정성이며, ㉢냉철한 ㉣확집이요, 고귀한 ㉤투쟁이기까지 하다. 지조가 교양인의 위의를 위하여 얼마나 값지고 그것이 국민의 ⓐ교화에 미치는 힘이 얼마나 크며, 따라서 지조를 지키기 위한 ㉥괴로움이 얼마나 가혹한가를 헤아리는 사람들은 한 나라의 지도자를 ㉦평가하는 기준으로서 먼저 그 지조의 강도를 살피려 한다. 지조가 없는 지도자는 믿을 수가 없고 믿을 수 없는 지도자는 따를 수가 없기 때문이다.",
        questions: [
          {
            Q: "㉠‘지조’의 한자 표기가 바른 것은?",
            A: ["支調", "志操", "知照", "枝條"],
          },
          {
            Q: "㉡〜㉤의 한자 표기가 바르지 않은 것?",
            A: ["㉡神念", "㉢冷徹", "㉣確執", "㉤鬪爭"],
          },
          {
            Q: "㉥‘괴로움’의 뜻을 지닌 한자어는?",
            A: ["卓越", "疲困", "滿足", "苦痛"],
          },
          {
            Q: "㉦‘평가’의 ‘가’와 같은 한자를 사용한 것은?",
            A: ["歌手", "書架", "價値", "御駕"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "<히포크라테스 ㉠선서>\n이제 ㉡의업에 종사할 ㉢허락을 받음에,\n나의 생애를 인류 ㉣봉사에 바칠 것을 엄숙히 서약하노라.\n나의 은사에 대하여 ㉤존경과 ㉥감사를 드리겠노라.\n나의 양심과 위엄으로서 의술을 베풀겠노라.\n나의 환자의 ㉦건강과 생명을 첫째로 생각하겠노라.\n나의 환자가 알려 준 모든 내정의 비밀을 지키겠노라.\n나는 의업의 고귀한 전통과 명예를 ㉧維持하겠노라.\n나는 동업자를 ⓐ형제처럼 여기겠노라.\n나는 인류, 종교, ㉨國籍, 정당, 정파 또는 사회적 지위 ㉩如何를 초월하여 오직 환자에 대한 나의 의무를 지키겠노라.\n나는 인간의 생명을 그 수태된 때로부터 지상의 것으로 존중히 여기겠노라.\n비록 위협을 당할지라도 나의 지식을 인도에 어긋나게 쓰지 않겠노라.\n이상의 서약을 나의 자유의사로 나의 ㉪名譽를 받들어 하노라.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠宣誓", "㉡醫業", "㉢許落", "㉣奉仕"],
          },
          {
            Q: "㉤‘존경’과 ㉥‘감사’의 한자 표기를 바르게 짝지은 것은?",
            A: ["尊警 - 感謝", "尊敬 - 感謝", "尊警 - 鑑謝", "尊敬 - 鑑謝"],
          },
          {
            Q: "㉦‘건강’의 ‘강’의 한자 표기가 바른 것은?",
            A: ["强", "綱", "降", "康"],
          },
          {
            Q: "㉧～㉪의 독음이 바르지 않은 것은?",
            A: ["㉧유지", "㉨국가", "㉩여하", "㉪명예"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠정보를 찾아내는 ㉡방법은 어떤 특정 기법과 그 ㉢기술 자체만을 ㉣의미하는 것이 아니고, 비즈니스 문제를 ⓐ이해하고 이러한 문제를 해결하기 위하여 정보기술을 ㉤적용하는 포괄적인 ㉥過程을 의미한다. 즉 유용한 정보의 ㉦抽出을 위한 방법론이라고 할 수 있다. 따라서 데이터마이닝을 효율적으로 ㉧遂行하기 위하여 시계열분석 등 각종 통계기법과 데이터베이스 기술뿐만 아니라 산업공학, 신경망, 인공지능, 전문가시스템, 퍼지논리, 패턴인식, 기계적 학습, 불확실성 추론, 정보 ㉨檢索에 이르기까지 각종 정보기술과 기법들을 사용하게 된다. 또한 ㉩경영전략, 마케팅 기법 등의 최신 경영기법들의 ⓑ이용도 ⓐ필요하다. 이러한 데이터마이닝을 통하여 거대한 데이터베이스에 숨어 있는 전략적인 정보를 발견할 수 있으며 이러한 정보는 주요 비즈니스 프로세스 개선의 가장 원초적인 단계에서 사용될 수 있다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠靜報", "㉡方法", "㉢技術", "㉣意味"],
          },
          {
            Q: "㉤‘적용’의 ‘적’과 같은 한자를 사용한 것은?",
            A: ["治績", "積滯", "海賊", "適應"],
          },
          {
            Q: "㉥〜㉨의 독음이 바르지 않은 것은?",
            A: ["㉥과정", "㉦추출", "㉧실행", "㉨검색"],
          },
          {
            Q: "㉩‘경영전략’을 한자로 표기할 때 사용되지 않은 것은?",
            A: ["經", "映", "戰", "略"],
          },
          {
            Q: "ⓐ‘이해’와 ⓑ‘이용’의 ‘이’의 한자 표기를 순서대로 바르게 짝지은 것은?",
            A: ["理 - 理", "理 - 利", "利 - 理", "利 - 利"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "우리는 우리의 삶을 어느 정도 스스로 결정할 수 있는가? 개인적 삶은 어느 정도까지 공적으로 ㉠보장되어야 하는가? 우리가 민주 사회의 ㉡전제 ㉢조건이라고 당연하게 생각하는 자유는 도대체 무엇인가? 이러한 물음들이 ㉣진부한 일상생활과 연결되어 있기는 하지만, ㉤결코 진부한 문제들이 아니다. 예를 들면 내가 누구와 함께 살고, 또 내가 동료에 관해 어떻게 생각하는가는 사적인 문제다. 나의 ㉥日記帳과 편지는 마찬가지로 사적이다. 만약 누군가가 나의 일기장을 들여다보고 나의 서신 ㉦往來를 ㉧監視한다면, 그것은 더 이상 진부한 문제가 아니다. 내가 어떤 옷을 입고, 또 어떤 직업을 가지는가도 역시 사적인 문제다. 만약 나의 ㉨趣向과는 상관없이 입어야 할 옷이 정해져 있다면, 누가 감히 개인의 사적인 욕구를 진부하다고 말할 수 있겠는가. 우리의 집과 가정은 두말할 나위 없이 외부의 시선으로부터 보호된 내밀한 사적 공간이다. 우리의 집이 완전하게 ㉩투명해져서 가정의 친밀성이 ㉪파괴된다면, 우리는 ㉫과연 진부한 개인의 ㉬행복을 입에 올릴 수 있겠는가.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠保障", "㉡前提", "㉢助件", "㉣陳腐"],
          },
          {
            Q: "㉤‘결코’의 ‘결’의 한자 표기가 바른 것은?",
            A: ["結", "決", "潔", "缺"],
          },
          {
            Q: "㉥〜㉨의 독음이 바르지 않은 것은?",
            A: ["㉥일기장", "㉦왕래", "㉧감시", "㉨의향"],
          },
          {
            Q: "㉩〜㉬의 한자 표기가 바른 것은?",
            A: ["㉩透明", "㉪把壞", "㉫寡然", "㉬幸富"],
          },
        ],
      },
      {
        type: "shortAnswer",
        share: "< 주관식 문제 >",
        questions: [
          {
            P: "㉠전통을 긍정하는 또 하나 다른 ㉡태도는 ㉢순수 한국적인 것의 모색이다. 한국문화란 한국의 ㉣성격이요, 그 내용은 인류 공동의 세계문화다. 한국문화-민족문화는 세계문화 안의 한국적 ㉤樣式의 발견과 ㉥形成에 있는 것이지 한국 ㉦特有 고립의 것만으로 이루어질 수는 없는 것이다. 한국문화의 ㉧主體가 희미해지는 때에 그러한 순수 한국적인 것을 찾는 것은 의의 있는 방향이라고 할 수가 있겠지만 앞으로의 한국문화 전통의 ㉨전개에 하등의 시대적 의의도 없는, 하나의 세계문화에 아무 새로움도 없는 것을 굉장한 것으로 착각하고 그것이 새로운 인간이나 ⓐ생활의 원형으로 제시되는 등의 ㉩(    ) ㉪復古의 전통긍정 태도도 비판과 경고를 받아야 한다.",
            Q: "[56~60] 지문의 ⓐ‘생활’을 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "스탕달의 소설 <적과 흑>에는 프랑스 복고왕정 시대의 한 ㉠風俗圖가 나온다. ㉡大革命으로 빼앗겼던 권력을 ㉢奪還한 귀족들은 일체 토론하지 않는 방식으로 토론을 ㉣禁止시킨다. 소설의 주인공 줄리앙 소렐은 ㉤천민 출신이지만 뛰어난 ㉥두뇌로 부상하는 새로운 세력을 대표하는 ⓐ인물이 된다. 그는 우여곡절 끝에 그 시대 ㉦최고 권력자의 한 사람으로 그려진 라몰 후작의 비서로 일하며 수많은 ㉧귀족들을 만난다. 소렐은 ㉨기회가 닿을 때마다 ㉩토론을 개시하려 하지만 귀족과 고관대작들은 접시에 코를 박고 ㉪아무런 대답도 없이 음식을 먹을 뿐이다. 그들은 지금 권력을 장악하고 있지만, 자기들의 몰락이 임박했으며, 토론이 그 몰락에 ㉫속도를 덧붙일 것임을 모르지 않았던 것이다. 자신감을 가진 자만이 먼저 말을 걸고 먼저 토론을 시작한다.",
            Q: "[65~69] 지문의 ⓐ‘인물’을 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "㉠지조란 것은 순일한 정신을 지키기 위한 불타는 ㉡신념이요, 눈물겨운 정성이며, ㉢냉철한 ㉣확집이요, 고귀한 ㉤투쟁이기까지 하다. 지조가 교양인의 위의를 위하여 얼마나 값지고 그것이 국민의 ⓐ교화에 미치는 힘이 얼마나 크며, 따라서 지조를 지키기 위한 ㉥괴로움이 얼마나 가혹한가를 헤아리는 사람들은 한 나라의 지도자를 ㉦평가하는 기준으로서 먼저 그 지조의 강도를 살피려 한다. 지조가 없는 지도자는 믿을 수가 없고 믿을 수 없는 지도자는 따를 수가 없기 때문이다.",
            Q: "[79~82] 지문의 ⓐ‘교화’를 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "<히포크라테스 ㉠선서>\n이제 ㉡의업에 종사할 ㉢허락을 받음에,\n나의 생애를 인류 ㉣봉사에 바칠 것을 엄숙히 서약하노라.\n나의 은사에 대하여 ㉤존경과 ㉥감사를 드리겠노라.\n나의 양심과 위엄으로서 의술을 베풀겠노라.\n나의 환자의 ㉦건강과 생명을 첫째로 생각하겠노라.\n나의 환자가 알려 준 모든 내정의 비밀을 지키겠노라.\n나는 의업의 고귀한 전통과 명예를 ㉧維持하겠노라.\n나는 동업자를 ⓐ형제처럼 여기겠노라.\n나는 인류, 종교, ㉨國籍, 정당, 정파 또는 사회적 지위 ㉩如何를 초월하여 오직 환자에 대한 나의 의무를 지키겠노라.\n나는 인간의 생명을 그 수태된 때로부터 지상의 것으로 존중히 여기겠노라.\n비록 위협을 당할지라도 나의 지식을 인도에 어긋나게 쓰지 않겠노라.\n이상의 서약을 나의 자유의사로 나의 ㉪名譽를 받들어 하노라.",
            Q: "[83~86] 지문의 ⓐ‘형제’를 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "㉠정보를 찾아내는 ㉡방법은 어떤 특정 기법과 그 ㉢기술 자체만을 ㉣의미하는 것이 아니고, 비즈니스 문제를 ⓐ이해하고 이러한 문제를 해결하기 위하여 정보기술을 ㉤적용하는 포괄적인 ㉥過程을 의미한다. 즉 유용한 정보의 ㉦抽出을 위한 방법론이라고 할 수 있다. 따라서 데이터마이닝을 효율적으로 ㉧遂行하기 위하여 시계열분석 등 각종 통계기법과 데이터베이스 기술뿐만 아니라 산업공학, 신경망, 인공지능, 전문가시스템, 퍼지논리, 패턴인식, 기계적 학습, 불확실성 추론, 정보 ㉨檢索에 이르기까지 각종 정보기술과 기법들을 사용하게 된다. 또한 ㉩경영전략, 마케팅 기법 등의 최신 경영기법들의 ⓑ이용도 ⓐ필요하다. 이러한 데이터마이닝을 통하여 거대한 데이터베이스에 숨어 있는 전략적인 정보를 발견할 수 있으며 이러한 정보는 주요 비즈니스 프로세스 개선의 가장 원초적인 단계에서 사용될 수 있다.",
            Q: "[87~91] 지문의 ⓐ‘필요’를 문맥에 맞는 漢字로 쓰시오.",
          },
        ],
      },
    ],
    answer: [
      2,
      4,
      3,
      2,
      1,
      4,
      1,
      3,
      3,
      4,
      1,
      4,
      3,
      4,
      2,
      1,
      2,
      3,
      2,
      1,
      2,
      3,
      1,
      4,
      4,
      1,
      4,
      2,
      3,
      4,
      1,
      2,
      1,
      3,
      4,
      2,
      3,
      3,
      4,
      2,
      4,
      2,
      3,
      1,
      2,
      4,
      1,
      2,
      3,
      1,
      2,
      1,
      4,
      4,
      3,
      2,
      4,
      1,
      2,
      3,
      1,
      4,
      3,
      2,
      3,
      1,
      2,
      4,
      2,
      2,
      1,
      3,
      4,
      3,
      4,
      2,
      1,
      3,
      2,
      1,
      4,
      3,
      3,
      2,
      4,
      2,
      1,
      4,
      3,
      2,
      2,
      3,
      2,
      4,
      1,
      "生活",
      "人物",
      "敎化",
      "兄弟",
      "必要",
    ],
  },
  {
    title: "40회 모의고사",
    exam: [
      {
        type: "multipleChoice",
        share: "다음 한자의 독음이 바른 것은?",
        questions: [
          {
            Q: "井",
            A: ["중", "정", "쟁", "증"],
          },
          {
            Q: "尋",
            A: ["심", "탐", "수", "검"],
          },
          {
            Q: "團",
            A: ["전", "촌", "적", "단"],
          },
          {
            Q: "角",
            A: ["각", "용", "어", "미"],
          },
          {
            Q: "陽",
            A: ["장", "낭", "양", "향"],
          },
          {
            Q: "引",
            A: ["궁", "인", "원", "리"],
          },
          {
            Q: "至",
            A: ["도", "치", "규", "지"],
          },
          {
            Q: " 鶴",
            A: ["계", "구", "학", "조"],
          },
          {
            Q: "紅",
            A: ["홍", "공", "송", "강"],
          },
          {
            Q: "悔",
            A: ["매", "모", "후", "회"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음의 독음을 가진 것은?",
        questions: [
          {
            Q: "역",
            A: ["逃", "述", "逆", "返"],
          },
          {
            Q: "가",
            A: ["佳", "刊", "甘", "丞"],
          },
          {
            Q: "등",
            A: ["寺", "勝", "豆", "登"],
          },
          {
            Q: "위",
            A: ["吳", "危", "由", "殆"],
          },
          {
            Q: "충",
            A: ["允", "充", "完", "育"],
          },
          {
            Q: "욕",
            A: ["減", "淡", "浴", "泳"],
          },
          {
            Q: "장",
            A: ["章", "央", "恒", "方"],
          },
          {
            Q: "초",
            A: ["替", "刀", "促", "初"],
          },
          {
            Q: "귀",
            A: ["竟", "雙", "貴", "顧"],
          },
          {
            Q: "수",
            A: ["囚", "抽", "樞", "醜"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음 한자와 독음이 같은 것은?",
        questions: [
          {
            Q: "相",
            A: ["逝", "詳", "嗣", "庶"],
          },
          {
            Q: "件",
            A: ["孔", "豆", "巾", "乞"],
          },
          {
            Q: "過",
            A: ["及", "優", "瓦", "寡"],
          },
          {
            Q: "蘭",
            A: ["簡", "乳", "浮", "亂"],
          },
          {
            Q: "掃",
            A: ["所", "妻", "婦", "曉"],
          },
          {
            Q: "後",
            A: ["薄", "厚", "君", "休"],
          },
          {
            Q: "舌",
            A: ["肺", "旋", "雪", "扇"],
          },
          {
            Q: "器",
            A: ["勤", "奇", "堅", "吉"],
          },
          {
            Q: "武",
            A: ["戌", "止", "賦", "舞"],
          },
          {
            Q: "邑",
            A: ["泣", "凝", "把", "吸"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음 한자의 뜻이 바른 것은?",
        questions: [
          {
            Q: "蜜",
            A: ["밥", "꿀", "물", "국"],
          },
          {
            Q: "玉",
            A: ["버선", "고무신", "바늘", "구슬"],
          },
          {
            Q: "寫",
            A: ["베끼다", "울다", "앉다", "찢다"],
          },
          {
            Q: "星",
            A: ["바람", "노을", "별", "연못"],
          },
          {
            Q: "走",
            A: ["헤엄치다", "달리다", "날다", "던지다"],
          },
          {
            Q: "太",
            A: ["미끄럽다", "까맣다", "따뜻하다", "크다"],
          },
          {
            Q: "快",
            A: ["우울하다", "배고프다", "졸리다", "상쾌하다"],
          },
          {
            Q: "笠",
            A: ["짚신", "삿갓", "지팡이", "술병"],
          },
          {
            Q: "葉",
            A: ["잎", "뿌리", "줄기", "꽃봉오리"],
          },
          {
            Q: "重",
            A: ["어둡다", "투명하다", "무겁다", "하찮다"],
          },
        ],
      },
      {
        type: "multipleChoice",
        share: "다음의 뜻을 가진 것은?",
        questions: [
          {
            Q: "술",
            A: ["酒", "酸", "酉", "醉"],
          },
          {
            Q: "여름",
            A: ["冬", "春", "秋", "夏"],
          },
          {
            Q: "얻다",
            A: ["得", "幸", "偏", "飽"],
          },
          {
            Q: "돌아가다",
            A: ["純", "滅", "表", "歸"],
          },
          {
            Q: "비록",
            A: ["豈", "何", "雖", "孰"],
          },
          {
            Q: "견주다",
            A: ["疲", "歌", "憤", "比"],
          },
          {
            Q: "아침",
            A: ["夕", "旦", "夜", "晝"],
          },
          {
            Q: "꾸짖다",
            A: ["美", "揚", "責", "讚"],
          },
          {
            Q: "번개",
            A: ["電", "雨", "霜", "露"],
          },
          {
            Q: "반드시",
            A: ["只", "乎", "矣", "必"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "일반적으로 스포츠에 ㉠영향을 주는 날씨 요소는 크게 온도, ㉡습도, 바람 ㉢기압 등이 꼽힌다. ㉣물론 이들은 각각 ㉤個別적으로 작용하기보다는 ㉥複合적으로 영향을 주기 때문에 특정 ㉦要因만을 떼어 내 생각하기엔 어려움이 있다. 날씨 요소 가운데 지금까지 가장 ㉧硏究가 많이 진행된 분야는 온도(열)이다. 대체로 인간은 ㉨운동과제를 수행할 때가 ㉩공부 같은 ㉪정신적인 과제를 ㉫수행할 때보다 온도 영향을 더 많이 받는 것으로 알려져 있다. ㉬당연히 운동을 하면 근육에 에너지가 많이 ⓐ공급돼야 하기 때문에 몸의 온도가 올라간다. 이 에너지는 글루코스(㉭포도당)와 지방의 분해에 의해 ⓑ생산되는데, 이때 생긴 열이 몸의 온도를 높이는 것이다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠影響", "㉡濕度", "㉢期厭", "㉣勿論"],
          },
          {
            Q: "㉤～㉧의 독음이 바르지 않은 것은?",
            A: ["㉤개별", "㉥복합", "㉦요소", "㉧연구"],
          },
          {
            Q: "㉨～㉫의 한자 표기가 바른 것은?",
            A: ["㉨連動", "㉩公夫", "㉪淸神", "㉫遂行"],
          },
          {
            Q: "㉬‘당연’의 ‘당’과 ㉭‘포도당’의 ‘당’의 한자표기를 순서대로 바르게 짝지은 것은?",
            A: ["當 - 糖", "當 - 堂", "糖 - 當", "糖 - 堂"],
          },
          {
            Q: "ⓐ‘공급’과 ⓑ‘생산’의 한자 표기를 바르게 짝지은 것은?",
            A: ["供級 - 生産", "供給 - 生産", "供級 - 生童", "供給 - 生童"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠유교 사회의 기본적 ㉡특징은 일반적으로 부계 ㉢원리의 ㉣엄격한 적용에서 찾을 수 있다. 집안에서 아버지의 권위는 ㉤절대적이며, 가장으로서 아내와 자녀 그리고 손자를 ㉥수직적ㆍ일원적으로 ㉦支配하는 ㉧權力을 갖는다. 뿐만 아니라 ㉨祭祀와 ㉩婚姻, 재산의 관리ㆍ상속 등 가족의 재생산에 관련된 모든 규범은 반드시 부계의 혈연 원리에 따라 처리되고 승인된다. 따라서 유교 사회를 ⓐ성립시키는 단위는 가족 및 ㉪확대된 부계의 친족 집단인 종족을 벗어나지 않는다.",
        questions: [
          {
            Q: "㉠～㉣의 한자표기가 바르지 않은 것은?",
            A: ["㉠儒敎", "㉡特徵", "㉢元理", "㉣嚴格"],
          },
          {
            Q: "㉤‘절대적’과 ㉥‘수직적’의 한자 표기를 바르게 짝지은 것은?",
            A: ["絶臺的 - 樹直的", "絶對的 - 垂直的", "絶對的 - 樹直的", "絶臺的 - 垂直的"],
          },
          {
            Q: "㉦～㉩의 독음이 바르지 않은 것은?",
            A: ["㉦지배", "㉧권력", "㉨제사", "㉩혼례"],
          },
          {
            Q: "㉪‘확대’의 ‘확’의 한자 표기가 바른 것은?",
            A: ["擴", "確", "獲", "穫"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "중국어를 배우는 서양 아이들은 한국 학생과 일본 학생을 매우 부러워한다. 우리들이 한자를 공부하고 있으면 한자문화권에서 자란 사람들도 ㉠별도로 외울 것이 있냐며 ㉡의문을 품는다. 이런 소리를 들을 때마다 ㉢안타까운 마음을 감출 수 없다. 우리는 유럽 사람들이 프랑스어, 이탈리아어, 스페인어 ㉣등 몇 나라 ㉤언어를 자유자재로 ㉥구사하는 것을 몹시 부러워한다. 이들은 영어도 참 빨리 배운다. 모두 라틴어라는 한 뿌리에서 나왔기 때문이다. 우리에게는 바로 한자가 이 같은 ㉦역할을 한다. 다시 말할 필요도 없이 한자는 중국, 일본, 한국은 물론 싱가포르 등의 동남아시아라는 거대한 ㉧지역에서 쓰이는 문자이다.",
        questions: [
          {
            Q: "㉠‘별도’의 ‘도’와 같은 한자를 사용한 것은?",
            A: ["陶工", "打倒", "挑發", "途中"],
          },
          {
            Q: "㉡ ‘의문’의 한자 표기가 바른 것은?",
            A: ["疑間", "疑問", "疑門", "疑聞"],
          },
          {
            Q: "㉢‘안타까운’의 뜻에 가장 가까운 한자어는?",
            A: ["茫茫", "感激", "哀惜", "歡喜"],
          },
          {
            Q: "㉣‘등’과 같은 한자를 사용하지 않는 한자어는?",
            A: ["하등", "등급", "등분", "등교"],
          },
          {
            Q: "㉤∼㉧의 한자 표기가 옳지 않은 것은?",
            A: ["㉤言語", "㉥區使", "㉦役割", "㉧地域"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉨의식형태란 ㉠結局 ㉡一種의 앎이기 때문에, 알게 하지 않고 ㉢知覺하게 하려면 문학 ㉣作品은(는) 의식형태에서 물러나지 않을 수 없다. 대부분의 작가들은 그들 나름의 ⓐ정치적 의식형태를 지니고 있다. 의식형태와 거리를 두는 것은 결코 의식형태의 포기가 아니다. 문학 作品은(는) 의식형태를 바꾸지 못한다. 다만, 의식형태와의 관계를 바꿀 수 있을 뿐이다. 지각형상들은 의식형태에서 떨어져 나가기 위하여 쓸데없고 ㉤가치 없고 있음직하지 않은 소단위 대상들에 ㉥집중한다. 지각형상이란 본질적으로 ㉦개념의 ㉧정의를 벗어나는 것, 개념의 정의에서 새어나오는 것이다. 作品에는 언제나 말할 수 없거나 말하기를 ㉨거부하는 요소들이 ㉩내재한다.",
        questions: [
          {
            Q: "㉠～㉣의 독음이 바르지 않은 것은?",
            A: ["㉠필경", "㉡일종", "㉢지각", "㉣작품"],
          },
          {
            Q: "㉤‘가치’의 한자 표기가 바른 것은?",
            A: ["價齒", "假齒", "價値", "假値"],
          },
          {
            Q: "㉥～㉨의 한자 표기가 바르지 않은 것은?",
            A: ["㉥集中", "㉦槪念", "㉧定義", "㉨巨否"],
          },
          {
            Q: "㉦‘내재’의 ‘재’와 같은 한자를 사용한 것은?",
            A: ["再審", "現在", "災禍", "材質"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "15세기 후반 조선에서는 사회경제적 ㉠변화에 조응하여 새로운 정치세력이 대두하기 시작하였다. 조선건국을 주도하여 정권을 ㉡獨占해 왔던 훈구세력이 ㉢兩班 관료제의 모순을 야기하고 있었고, 이에 ㉣隨伴하여 과전법의 ㉤崩壞와 지주제의 ㉥발달, 상품의 ㉦유통과 공납제의 모순 심화, 군역제도의 붕괴, 국제 ⓐ교역의 발달 및 마찰 등 새로운 사회경제적 변화가 일어나고 있었다. 이러한 변화의 흐름을 타고 새로운 정치세력으로 등장한 것이 사림파였다. 사림파는 재지중소지주에서 성장을 거듭하여 ㉧점차 훈구파를 대신할 정치세력으로 자리 잡아 갔으며, 그들은 훈구파 지배하에서 야기된 각종 사회경제적 ㉨모순을 ㉩해결하고 유교적 이상사회를 ㉪건설하고자 하였다. 그리하여 도학정치의 이념을 바탕으로 향촌질서를 재편하는 한편 서원의 건립, 성리학의 보급, 경제개혁 등 다양하고 구체적인 개혁을 추진하였다.",
        questions: [
          {
            Q: "㉠‘변화’의 한자 표기가 바른 것은?",
            A: ["辯幻", "辯化", "變幻", "變化"],
          },
          {
            Q: "㉡～㉤의 독음이 바르지 않은 것은?",
            A: ["㉡독점", "㉢양반", "㉣기반", "㉤붕괴"],
          },
          {
            Q: "㉥‘발달’과 ㉦‘유통’의 한자 표기를 바르게 짝지은 것은?",
            A: ["發達 - 流追", "發違 - 流通", "發達 - 流通", "發違 - 流追"],
          },
          {
            Q: " ㉧～㉪의 한자 표기가 바르지 않은 것은?",
            A: ["㉧暫次", "㉨矛盾", "㉩解決", "㉪建設"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "한국석유공사가 이라크 북부 쿠르드 자치지역에서 ㉠추진해온 유전 개발사업이 ㉡실패로 끝나는 바람에 계약금과 ㉢탐사 ㉣비용 등 모두 4억달러(약 4400억원)를 고스란히 날리게 됐다. 5개 광구 중 네 곳을 시추한 결과 원유가 아예 없거나 매장량이 극히 적은 것으로 드러났고, 나머지 한 곳도 ㉤經濟性이 낮아 ㉥投資 비용을 ㉦回收할 ㉧可能性이 없다는 것이다. 쿠르드 유전 개발은 이 정부가 출범 초기부터 자원 외교의 대표적인 성과로 내세웠던 프로젝트다. 이명박 ⓐ대통령이 2008년 2월 당선자 ㉨시절에 가장 먼저 만난 외국 ⓑ지도자가 쿠르드 자치정부 총리였다. 정부는 우리나라 연간 원유 소비량의 두 배가 넘는 19억배럴의 원유 확보와 함께 쿠르드지역 사회기반시설(SOC) 건설사업에 참여하게 되어, ㉩한 번에 두 가지의 효과를 거뒀다고 자랑했다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠推進", "㉡失貝", "㉢探査", "㉣費用"],
          },
          {
            Q: "㉤～㉧의 독음이 바르지 않은 것은?",
            A: ["㉤경제성", "㉥설치", "㉦회수", "㉧가능성"],
          },
          {
            Q: "㉨‘시절’에 해당하는 한자를 사용한 한자어는?",
            A: ["竊盜", "視線", "詩人", "節氣"],
          },
          {
            Q: "㉩‘한 번에 두 가지의 효과’와 가장 관련 있는 한자성어는?",
            A: ["三旬九食", "張三李四", "一石二鳥", "九牛一毛"],
          },
          {
            Q: "ⓐ‘대통령’과 ⓑ‘지도자’의 한자 표기를 바르게 짝지은 것은?",
            A: ["代統領 - 指挑者", "大統領 - 指導者", "大統領 - 指挑者", "代統領 - 指導者"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "㉠작년 말에 타임(TIME)지는 ‘올해의 인물’로 가톨릭 교황 프란치스코를 ㉡선정했다. 물질만능주의가 판을 치고, 소수의 거대 부자(super rich)와 다수의 일하는 가난한 자(working poor)로 양극화된 ㉢세상에서 가난한 삶을 몸소 ㉣실천하면서 가난한 자의 벗이 되려는 교황에게서 많은 사람들이 ⓐ신선한 ㉤충격과 ㉥위로를 받았기 때문일 것이다. 기성의 종교지도자들이 겉으로는 사랑과 자비를 외치면서도 실제로는 가난한 이들보다는 돈 많고 권력 있는 자들과 가깝게 지내고, 어려운 이웃을 위해 ㉦헌금을 쓰기보다는 교회나 사찰을 크게 짓는 데 ㉧關心이 많고, 다른 종교에 대해서는 ㉨排他적인 태도를 보이면서 ‘그들만의 리그’에 ㉩沒頭해 온 것과는 확연히 다른 모습이다. 프란치스코 교황은 이렇게 세속화된 권위주의적 종교인들과는 달리 바티칸시티 안에만 머물지 않고 세상과 소통하기 위해 낮은 곳으로 내려와 ㉪平和의 메시지를 전하고 가난한 이들의 벗이 되고자 했다.",
        questions: [
          {
            Q: "㉠〜㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠昨年", "㉡選定", "㉢世像", "㉣實踐"],
          },
          {
            Q: "㉤‘충격’과 ㉥‘위로’의 한자 표기를 바르게 짝지은 것은?",
            A: ["衝擊 - 慰勞", "衡擊 - 慰勞", "衝擊 - 魏勞", "衡擊 - 魏勞"],
          },
          {
            Q: "㉦‘헌금’의 한자 표기가 바른 것은?",
            A: ["軒金", "獻金", "戱金", "懸金"],
          },
          {
            Q: "㉧～㉪의 독음이 바르지 않은 것은?",
            A: ["㉧관심", "㉨배타", "㉩몰입", "㉪평화"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "구제역이 발생한 지 어제로 100일이 지났다. 대규모 살처분과 백신 ㉠접종으로 구제역 ㉡발병은 잦아들고 있지만 그동안의 ㉢손실은 엄청났다. 소 16만 마리, 돼지 330만 마리 등 346만 마리의 가축이 살처분 됐고, ㉣전국 곳곳이 ㉤家畜들의 ⓐ무덤으로 변해버렸다. 경제적 ㉥被害도 살처분 ㉦報償 비용 1조8000억원 등 3조원에 이를 것으로 ㉧計算된다. 이에 맞춰 축산 전문가 등 교수ㆍ지식인 200명은 어제 구제역 대책의 ㉨근본적인 전환을 촉구하는 ㉩호소문을 발표했다. 살처분은 ㉪자연 ㉫면역력을 갖춘 건강한 가축까지 모두 없애버리는 결과를 초래한다는 이유를 들어 시급히 대안이 마련돼야 한다고 ㉬강조했다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바른 것은?",
            A: ["㉠接終", "㉡拔病", "㉢損室", "㉣全國"],
          },
          {
            Q: "㉤～㉧의 독음이 바르지 않은 것은?",
            A: ["㉤가축", "㉥피해", "㉦배상", "㉧계산"],
          },
          {
            Q: "㉨～㉫의 한자 표기가 바르지 않은 것은?",
            A: ["㉨根本", "㉩護召", "㉪自然", "㉫免疫"],
          },
          {
            Q: "㉬‘강조’의 한자 표기가 바른 것은?",
            A: ["强早", "强弔", "强操", "强調"],
          },
          {
            Q: "ⓐ‘무덤’의 뜻을 지니지 않은 한자는?",
            A: ["均", "塚", "墓", "墳"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "대학이 고시 ㉠학원으로 변질되거나 학생들이 교양 및 ㉡전공 교육을 ⓐ외면하고 고시 ㉢과목에 매달리는 것을 막을 수 있도록 고시제도가 ㉣개편되어야 한다. 이를 위해서 ㉤개혁 ㉥모형은 응시자가 ㉦광범한 교양 교육과 심화된 전공 교육을 성실히 ㉧이수하였는지를 평가할 수 있어야 한다. 현행 행정고시는 응시자로 하여금 특정 과목 위주의 강의수강을 유도한다. 특히 비전공자의 경우 자기 전공을 포기한 채 고시과목 위주의 공부에 집중하도록 하며 고시학원을 전전하면서 교양교육을 간과한 요약식․㉨暗記式 수업에 매달리게 한다. 따라서 ㉩思考力, ㉪判斷力, 추론력, ㉫分析力, 응용력을 종합적으로 발전시킨 사람보다는 ㉬한정된 과목 내용에 대한 단편적 지식을 가진 사람을 선발할 수밖에 없는 결과를 낳고 있다.",
        questions: [
          {
            Q: "㉠～㉣의 한자 표기가 바르지 않은 것은?",
            A: ["㉠學院", "㉡戰功", "㉢科目", "㉣改編"],
          },
          {
            Q: "㉤～㉧의 한자 표기가 바른 것은?",
            A: ["㉤介革", "㉥模刑", "㉦光犯", "㉧履修"],
          },
          {
            Q: "㉨～㉫의 독음이 바르지 않은 것은?",
            A: ["㉨암기식", "㉩사고력", "㉪결단력", "㉫분석력"],
          },
          {
            Q: "㉬‘한정’의 ‘한’과 같은 한자를 사용한 것은?",
            A: ["限界", "閑散", "翰墨", "恨歎"],
          },
        ],
      },
      {
        type: "withPassage",
        share: "다음 글을 읽고 물음에 답하시오.",
        passage:
          "《삼국유사》는 고려 시대 후기의 고승 일연이 편찬한 사서이다.《삼국유사》는 모두 5 ⓐ권 2 ⓑ책으로 되어 있으며, 권과는 별도로 ‘㉠王曆, ㉡紀異, ㉢興法, 탑상, 의해, 신주, 감통, 피은, ㉣孝善’의 9편목으로 나누어져 기술되어 있다.《삼국사기》가 왕의 ㉤명령에 따라 편찬된 ‘㉥관찬적인 정사’라면, 《삼국유사》는 개인이 편찬한, 즉 ‘사찬적인 야사’라 하겠다.《삼국유사》는 정사가 아닌 ㉦체제로《삼국사기》에 빠진 고기의 기록들을 ㉧원형대로 편찬해 놓은 데 그 독특한 가치가 있다. 고조선의 개국신화인 단군신화를 비롯하여 기자조선 및 위만조선, 북부여, 동부여, 백제, 삼한, 가락국의 역사를 기록해 놓은 것을 비롯하여, 고대의 신화, 전설, 지리, ㉨민속, 사회, 사상, 신앙, 옛 어휘 등을 기록해 놓았다. 특히, 불교가 우리나라에 전래되어 온 과정을 비롯하여, 사찰, 불탑, 승니, 불전, 기도, 영험 등 불교에 관하여 ㉩풍부한 ㉪내용을 싣고 있다.",
        questions: [
          {
            Q: "ⓐ‘권’과 ⓑ‘책’의 한자 표기를 바르게 짝지은 것은?",
            A: ["拳 - 策", "拳 - 冊", "卷 - 冊", "卷 - 策"],
          },
          {
            Q: "㉠〜㉣의 독음이 바르지 않은 것은?",
            A: ["㉠왕책", "㉡기이", "㉢흥법", "㉣효선"],
          },
          {
            Q: "㉤～㉧의 한자 표기가 바른 것은?",
            A: ["命令", "冠撰", "體除", "員形"],
          },
          {
            Q: "㉨‘민속’의 ‘속’과 같은 한자를 사용한 것은?",
            A: ["速讀", "持續", "約束", "俗談"],
          },
          {
            Q: "㉩‘풍부’과 ㉪‘내용’의 한자 표기를 바르게 짝지은 것은?",
            A: ["風富 - 內容", "豐富 - 內容", "風富 - 內勇", "豐富 - 內勇"],
          },
        ],
      },
      {
        type: "shortAnswer",
        share: "< 주관식 문제 >",
        questions: [
          {
            P: "㉠유교 사회의 기본적 ㉡특징은 일반적으로 부계 ㉢원리의 ㉣엄격한 적용에서 찾을 수 있다. 집안에서 아버지의 권위는 ㉤절대적이며, 가장으로서 아내와 자녀 그리고 손자를 ㉥수직적ㆍ일원적으로 ㉦支配하는 ㉧權力을 갖는다. 뿐만 아니라 ㉨祭祀와 ㉩婚姻, 재산의 관리ㆍ상속 등 가족의 재생산에 관련된 모든 규범은 반드시 부계의 혈연 원리에 따라 처리되고 승인된다. 따라서 유교 사회를 ⓐ성립시키는 단위는 가족 및 ㉪확대된 부계의 친족 집단인 종족을 벗어나지 않는다.",
            Q: "[56~59] 지문의 ⓐ‘성립’을 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "㉨의식형태란 ㉠結局 ㉡一種의 앎이기 때문에, 알게 하지 않고 ㉢知覺하게 하려면 문학 ㉣作品은(는) 의식형태에서 물러나지 않을 수 없다. 대부분의 작가들은 그들 나름의 ⓐ정치적 의식형태를 지니고 있다. 의식형태와 거리를 두는 것은 결코 의식형태의 포기가 아니다. 문학 作品은(는) 의식형태를 바꾸지 못한다. 다만, 의식형태와의 관계를 바꿀 수 있을 뿐이다. 지각형상들은 의식형태에서 떨어져 나가기 위하여 쓸데없고 ㉤가치 없고 있음직하지 않은 소단위 대상들에 ㉥집중한다. 지각형상이란 본질적으로 ㉦개념의 ㉧정의를 벗어나는 것, 개념의 정의에서 새어나오는 것이다. 作品에는 언제나 말할 수 없거나 말하기를 ㉨거부하는 요소들이 ㉩내재한다.",
            Q: "[65~68] 지문의 ⓐ‘정치’를 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "15세기 후반 조선에서는 사회경제적 ㉠변화에 조응하여 새로운 정치세력이 대두하기 시작하였다. 조선건국을 주도하여 정권을 ㉡獨占해 왔던 훈구세력이 ㉢兩班 관료제의 모순을 야기하고 있었고, 이에 ㉣隨伴하여 과전법의 ㉤崩壞와 지주제의 ㉥발달, 상품의 ㉦유통과 공납제의 모순 심화, 군역제도의 붕괴, 국제 ⓐ교역의 발달 및 마찰 등 새로운 사회경제적 변화가 일어나고 있었다. 이러한 변화의 흐름을 타고 새로운 정치세력으로 등장한 것이 사림파였다. 사림파는 재지중소지주에서 성장을 거듭하여 ㉧점차 훈구파를 대신할 정치세력으로 자리 잡아 갔으며, 그들은 훈구파 지배하에서 야기된 각종 사회경제적 ㉨모순을 ㉩해결하고 유교적 이상사회를 ㉪건설하고자 하였다. 그리하여 도학정치의 이념을 바탕으로 향촌질서를 재편하는 한편 서원의 건립, 성리학의 보급, 경제개혁 등 다양하고 구체적인 개혁을 추진하였다.",
            Q: "[69~72] 지문의 ⓐ‘교역’을 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "㉠작년 말에 타임(TIME)지는 ‘올해의 인물’로 가톨릭 교황 프란치스코를 ㉡선정했다. 물질만능주의가 판을 치고, 소수의 거대 부자(super rich)와 다수의 일하는 가난한 자(working poor)로 양극화된 ㉢세상에서 가난한 삶을 몸소 ㉣실천하면서 가난한 자의 벗이 되려는 교황에게서 많은 사람들이 ⓐ신선한 ㉤충격과 ㉥위로를 받았기 때문일 것이다. 기성의 종교지도자들이 겉으로는 사랑과 자비를 외치면서도 실제로는 가난한 이들보다는 돈 많고 권력 있는 자들과 가깝게 지내고, 어려운 이웃을 위해 ㉦헌금을 쓰기보다는 교회나 사찰을 크게 짓는 데 ㉧關心이 많고, 다른 종교에 대해서는 ㉨排他적인 태도를 보이면서 ‘그들만의 리그’에 ㉩沒頭해 온 것과는 확연히 다른 모습이다. 프란치스코 교황은 이렇게 세속화된 권위주의적 종교인들과는 달리 바티칸시티 안에만 머물지 않고 세상과 소통하기 위해 낮은 곳으로 내려와 ㉪平和의 메시지를 전하고 가난한 이들의 벗이 되고자 했다.",
            Q: "[78~81] 지문의 ⓐ‘신선’을 문맥에 맞는 漢字로 쓰시오.",
          },
          {
            P: "대학이 고시 ㉠학원으로 변질되거나 학생들이 교양 및 ㉡전공 교육을 ⓐ외면하고 고시 ㉢과목에 매달리는 것을 막을 수 있도록 고시제도가 ㉣개편되어야 한다. 이를 위해서 ㉤개혁 ㉥모형은 응시자가 ㉦광범한 교양 교육과 심화된 전공 교육을 성실히 ㉧이수하였는지를 평가할 수 있어야 한다. 현행 행정고시는 응시자로 하여금 특정 과목 위주의 강의수강을 유도한다. 특히 비전공자의 경우 자기 전공을 포기한 채 고시과목 위주의 공부에 집중하도록 하며 고시학원을 전전하면서 교양교육을 간과한 요약식․㉨暗記式 수업에 매달리게 한다. 따라서 ㉩思考力, ㉪判斷力, 추론력, ㉫分析力, 응용력을 종합적으로 발전시킨 사람보다는 ㉬한정된 과목 내용에 대한 단편적 지식을 가진 사람을 선발할 수밖에 없는 결과를 낳고 있다.",
            Q: "[87~90] 지문의 ⓐ‘외면’을 문맥에 맞는 漢字로 쓰시오",
          },
        ],
      },
    ],
    answer: [
      2,
      1,
      4,
      1,
      3,
      2,
      4,
      3,
      1,
      4,
      3,
      1,
      4,
      2,
      2,
      3,
      1,
      4,
      3,
      1,
      2,
      3,
      4,
      4,
      1,
      2,
      3,
      2,
      4,
      1,
      2,
      4,
      1,
      3,
      2,
      4,
      4,
      2,
      1,
      3,
      1,
      4,
      1,
      4,
      3,
      4,
      2,
      3,
      1,
      4,
      3,
      3,
      4,
      1,
      2,
      3,
      2,
      4,
      1,
      4,
      2,
      3,
      4,
      2,
      1,
      3,
      4,
      2,
      4,
      3,
      3,
      1,
      2,
      2,
      4,
      3,
      2,
      3,
      1,
      2,
      3,
      4,
      3,
      2,
      4,
      1,
      2,
      4,
      3,
      1,
      3,
      1,
      1,
      4,
      2,
      "成立",
      "政治",
      "交易",
      "新鮮",
      "外面",
    ],
  },
];
