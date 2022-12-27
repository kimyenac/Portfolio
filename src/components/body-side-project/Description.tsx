import styled from "styled-components";

export const SlidoDescription = () => {
  return (
    <Wrap>
      <Container>
        <b>
          <a target="_blank" href="https://www.slido.com/?experience_id=11-z/">
            Slido 메인 페이지
          </a>{" "}
          를 클론 코딩한 프로젝트입니다.
        </b>{" "}
        리액트 공식 문서를 읽은 후 진행하였으며, 해당 프로젝트를 통해
        <b>
          {" "}
          처음으로 주도적으로 <RedSkill>순수 ReactJS</RedSkill> 를 사용할 수
          있었습니다.
        </b>
      </Container>
      <Container>
        <b>무한 캐러셀 및 쿠키, 난이도가 높은 애니메이션들을 구현</b>하며 개발
        능력을 쌓았고, <RedSkill>vercel</RedSkill>을 이용하여 정적 웹사이트의
        Lean 한 배포를 경험해보았습니다. 한 가지 아쉬운 점이 있다면 데스크탑에만
        맞춰서 개발해서 반응형이 아니라는 점입니다.
      </Container>
    </Wrap>
  );
};

export const PortfolioDescription = () => {
  return (
    <Wrap>
      <Container>
        <b>포트폴리오 용도로 제작한 웹사이트</b>이며, 현재 보고 계신 이
        웹사이트에 해당합니다.
      </Container>
      <Container>
        <RedSkill>ReactJS</RedSkill> 를 활용하여 개발하였으며, 처음으로{" "}
        <RedSkill>Recoil</RedSkill> 을 사용하며 상태관리를 하였습니다. 또한{" "}
        <b>직접 기획 및 UI & UX를 하며 새로운 경험을 할 수 있어 좋았고,</b>{" "}
        에러가 발생하였을 때 보여주는 화면과 예외처리에 신경을 많이 쓰며
        개발하였습니다. 이전 프로젝트를 반응형으로 만들지 못한 게 아쉬웠던
        기억에{" "}
        <b>
          반응형으로 개발하면서, 데스크탑/모바일 각각에 특성에 맞춰 조금씩 다른
          UI를 보여주기 위해
        </b>{" "}
        공을 많이 들인 프로젝트입니다.
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Container = styled.div`
  a {
    color: #5bb3e9;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline #5bb3e9;
  }
`;

const RedSkill = styled.div`
  display: inline-block;
  color: #ff4949;
`;
