import { quarterProjectListType } from "../types";

const quarterProjectList: quarterProjectListType = {
  data: [
    {
      id: "202203",
      quarter: "2022 q3",
      projectList: [
        {
          id: "2022030101-dev",
          name: "비즈하우스 홈 - 리뷰 파트 리뉴얼 (데스크탑)",
          date: "2022년 09월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "JSON",
            "Styled-Component",
            "TypeScript",
          ],
          description:
            "데스크탑은 무한 자동 캐러셀(마우스 오버 시 멈췄다가 마우스가 멀어지면 다시 반복), 모바일은 스와이프 캐러셀을 구현하였습니다. 새로운 api가 필요해서 요청 api 문서를 작성하여 백엔드 개발자 분께 전달하며 협업하였고, 디자이너 분과는 피그마를 통해 소통하였습니다. 또한 QA & 프로젝트 매니저 분과 소통하며 깊은 완성도로 마무리 했습니다.",
          video: "/video/2022030101.mp4",
        },
        {
          id: "2022030102-dev",
          name: "비즈하우스 홈 - 리뷰 파트 리뉴얼 (모바일)",
          date: "2022년 09월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "JSON",
            "Styled-Component",
            "TypeScript",
          ],
          description:
            "데스크탑은 무한 자동 캐러셀(마우스 오버 시 멈췄다가 마우스가 멀어지면 다시 반복), 모바일은 스와이프 캐러셀을 구현하였습니다. 새로운 api가 필요해서 요청 api 문서를 작성하여 백엔드 개발자 분께 전달하며 협업하였고, 디자이너 분과는 피그마를 통해 소통하였습니다. 또한 QA & 프로젝트 매니저 분과 소통하며 깊은 완성도로 마무리 했습니다.",
          video: "/video/2022030102.mov",
        },
        {
          id: "20220302",
          name: "그 외 프로젝트",
          date: "2022년 07월 ~ 09월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "JSON",
            "Styled-Component",
            "TypeScript",
            "DayJS",
            "Emotion",
            "Sass",
          ],
          description:
            "인턴 기간 2개월 포함 3개월 동안 총 40개의 이슈를 진행 및 배포하며 비즈하우스 옵션페이지 및 템플릿페이지 유지보수 & 일부 리뉴얼 / 미리캔버스 에디터 - 배송 파트 리뉴얼 프론트엔드 파트를 담당했습니다. 또한 레거시를 대상으로 eslint 무효화 주석을 제거 후 리팩토링하는 이슈도 담당했고, 온보딩 스몰 이슈들을 진행하며 회사 코드와 흐름에 대해 익혔습니다.",
        },
      ],
    },
    {
      id: "202204",
      quarter: "2022 q4",
      projectList: [
        {
          id: "20220401",
          name: "비즈하우스 모바일 - 헤더 리뉴얼",
          date: "2022년 10월",
          skill: [
            "React",
            "HTML",
            "CSS",
            "Styled-Component",
            "TypeScript",
            "JSP",
            "Emotion",
          ],
          description:
            "해당 프로젝트로 비즈하우스의 모든 모바일 헤더가 기존 JSP 코드에서 TSX 코드로 변경 및 UI & UX 리뉴얼 되었습니다. feature 패키지를 새로 만들어서 총 8개의 헤더를 구현하였으며, 추후 다른 개발자가 코드를 보기 쉽도록 개발자를 위한 dev 모드를 구현하고 설계 및 구조 ReadME를 작성하였습니다.",
          video: "/video/20220401.mov",
        },
        {
          id: "20220402",
          name: "비즈하우스 모바일 - 바텀 네비게이션 리뉴얼",
          date: "2022년 10월",
          skill: [
            "React",
            "HTML",
            "CSS",
            "Styled-Component",
            "TypeScript",
            "JSP",
          ],
          description:
            "해당 프로젝트로 비즈하우스 - 모바일 바텀네비게이션이 기존 JSP 코드에서 TSX 코드로 변경 및 UI & UX 리뉴얼 되었습니다. 또한 아이폰 하단바에 대응하는 CSS를 추가하여 사용자 만족도를 높였습니다. feature 패키지를 새로 만들어서 구현하였으며, 추후 다른 개발자가 코드를 보기 쉽도록 개발자를 위한 dev 모드를 구현하고 설계 및 구조 ReadME를 작성하였습니다.",
          video: "/video/20220402.mov",
        },
        {
          id: "20220403",
          name: "비즈하우스 모바일 - 카테고리 페이지 리뉴얼",
          date: "2022년 11월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "Styled-Component",
            "TypeScript",
            "JSP",
            "Emotion",
            "JSON",
          ],
          description:
            "해당 프로젝트로 비즈하우스 - 모바일 카테고리가 기존 JSP 코드에서 TSX 코드로 변경 및 UI & UX 리뉴얼 되었습니다. 스토리지를 사용하여 카테고리별 최근 본 내역이 있는 경우엔 최근 본 상품/의뢰/디자인을 보여주도록 하였고, 최근 본 내역이 없는 경우엔 각 카테고리 기능을 보여주도록 구현하였습니다. 바텀 네비게이션이 리뉴얼 되며 새롭게 만들어진 feature 패키지 안에서 구현하였으며, 추후 다른 개발자가 코드를 보기 쉽도록 개발자를 위한 dev 모드를 구현하고 설계 및 구조 ReadME를 작성하였습니다.",
          video: "/video/20220403.mov",
        },
        {
          id: "20220404",
          name: "비즈하우스 고객업종모달 리뉴얼",
          date: "2022년 12월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "Styled-Component",
            "TypeScript",
            "JSP",
          ],
          description:
            "해당 프로젝트로 비즈하우스 - 고객업종등록 모달이 기존 JSP 코드에서 TSX 코드로 변경 및 UI & UX 리뉴얼 되었습니다. Recoil을 사용하여 컴포넌트 간에 상태를 공유하도록 하였고, 등록 모달이 뜨는 페이지 플로우에 대한 정확한 정책이 없어서, 기획자 분과 협의하며 사용자 편의성을 생각하여 직접 의견을 내며 개발하였습니다. 또한 React-Query로 등록할 때 필요한 카테고리 데이터를 Get 가져왔고, 유저가 선택한 데이터를 Post 로 백엔드에 보내며 통신하였습니다. feature 패키지를 새로 만들어 구현하였으며, 추후 다른 개발자가 코드를 보기 쉽도록 개발자를 위한 dev 모드를 구현하고 설계 및 구조 ReadME를 작성하였습니다.",
          video: "/video/20220404.mov",
        },
        {
          id: "20220305",
          name: "그 외 프로젝트",
          date: "2022년 10월 ~ 12월",
          skill: [
            "React",
            "React-Query",
            "HTML",
            "CSS",
            "JSON",
            "Styled-Component",
            "TypeScript",
            "DayJS",
            "Emotion",
            "Sass",
          ],
          description:
            "4분기 3개월 동안 총 35개의 이슈를 진행 및 배포하며 비즈하우스 나의 디자인 페이지 유지보수 & 일부 리뉴얼 프론트엔드 파트를 담당했습니다. 또한 신규 입사자 분들을 위해 작성되어 있던 기존 문서들이 비즈니스 용어가 많아 어렵다는 의견이 있어, 쉽게 풀어내어 새로 작성하였고. 동료 개발자 분들의 작업에 대한 코드 리뷰 등 기타 업무를 담당하였습니다.",
        },
      ],
    },
  ],
};

export default quarterProjectList;
