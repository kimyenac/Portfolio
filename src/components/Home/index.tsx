import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SectionHeightStore } from "../../store";
import { Theme } from "../../styles";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigatorHeight = useRecoilValue(
    SectionHeightStore.navigatorHeightStore
  );
  const [homeHeight, setHomeHeight] = useRecoilState(
    SectionHeightStore.homeHeightStore
  );

  useEffect(() => {
    if (ref.current) {
      setHomeHeight(ref.current.offsetHeight);
    }
  }, [setHomeHeight]);

  const onScroll = () => {
    window.scrollTo({ top: homeHeight - navigatorHeight, behavior: "smooth" });
  };

  return (
    <Wrap ref={ref}>
      <Container>
        <MainTitle>🙌🏻 안녕하세요!</MainTitle>
        <Horizontal />
        <SubTitle>
          웹 프론트엔드 개발자 <b>김예나</b> 입니다.
        </SubTitle>
        <LinkWrap>
          <Link href="https://github.com/kimyenac" target="_blank">
            <img src={Theme.icon.gitHubLogo} />
          </Link>
          <Link href="https://yeroyal.tistory.com/" target="_blank">
            <img src={Theme.icon.blogLogo} />
          </Link>
          <Link href="mailto:yena.c.2005@gmail.com" target="_blank">
            <img src={Theme.icon.contact} />
          </Link>
        </LinkWrap>
      </Container>
      <ScrollButton onClick={onScroll}>learn more</ScrollButton>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 1px);

  background-color: #fff;
  //background-color: ${Theme.color.defaultColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  margin: 0 40px;

  color: ${Theme.color.defaultTextColor};
`;

const MainTitle = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
`;

const Horizontal = styled.div`
  height: 1px;
  width: 100%;

  background: ${Theme.color.defaultHorizontalColor};
`;

const SubTitle = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;

  display: flex;
  max-width: max-content;
  gap: 4px;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  animation: typing 6s steps(120, end), blink-caret 0.75s step-end infinite;
  animation-direction: alternate;

  @keyframes typing {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-top: 25px;
`;

const Link = styled.a`
  width: 15px;
  height: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  color: ${Theme.color.defaultColor};
  padding: 0.7rem 1.2rem;
  border: 1px solid ${Theme.color.defaultColor};
  border-radius: 8px;
  width: max-content;

  :hover {
    background-color: ${Theme.color.defaultColor};
    color: #fff;
    cursor: pointer;
  }
`;
