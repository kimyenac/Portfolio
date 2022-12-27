import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

/* body - Mobile > Home */
const MobileHome = () => {
  /* 타이핑 무한 반복 애니메이션에 쓰일 소개 (설명) 리스트 */
  const introduction = [
    "Hello, my name is Kim Yena",
    "I'm front-end developer",
    "Look forward to my growth",
  ];

  /* 현재 소개 리스트 인덱스 */
  const [curIndex, setCurIndex] = useState(0);

  /* 애니메이션 관리할 ref */
  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  useEffect(() => {
    if (!ref.current) return;

    const onAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName === "typing") {
        setCurIndex((prev) => (prev + 1) % 6);
      }
    };

    ref.current.addEventListener("animationiteration", onAnimationEnd);

    return () => {
      ref.current.removeEventListener("animationiteration", onAnimationEnd);
    };
  }, []);

  const onClickScrollBtn = () => {
    window.scrollTo({ top: 644, behavior: "smooth" });
  };

  return (
    <Container>
      <HomeImg />
      <Overlay>
        <InfoWrap>
          <Name>KIM YE-NA</Name>
          <IntroductionWrap>
            <Introduction ref={ref}>
              {introduction[parseInt(curIndex / 2 + "")]}
            </Introduction>
          </IntroductionWrap>
          <ScrollButton onClick={onClickScrollBtn}>learn more</ScrollButton>
        </InfoWrap>
      </Overlay>
    </Container>
  );
};

export default MobileHome;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5bb3e9;
`;

const HomeImg = styled.div`
  background-position: center;
  background-size: 50rem;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("/icons/home_develop.jpg");
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
`;

const IntroductionWrap = styled.div`
  max-width: 600px;
  position: relative;
  color: #fff;
`;

const Introduction = styled.div`
  display: flex;
  margin: 0;
  font-family: monospace;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 3s steps(60, end) infinite,
    blink-caret 0.75s step-end infinite;
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

const ScrollButton = styled.button`
  color: #fff;
  padding: 0.7rem 1.2rem;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-top: 2.5rem;

  :hover {
    background-color: #5bb3e9;
    border: 1px solid #5bb3e9;
    cursor: pointer;
  }
`;
