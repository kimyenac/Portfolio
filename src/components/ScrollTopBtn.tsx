import styled, { css } from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import ErrorFallback from "./ErrorFallback";
import MediaQuery from "react-responsive";
import { ErrorBoundary } from "react-error-boundary";

/* 특정 스크롤 이하 내려가면 생기는 버튼 (메인 화면으로 이동 가능한) */
const ScrollTopBtn = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 120) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MediaQuery maxWidth={799}>
        <TopBtn onClick={onClick} isScroll={isScroll} isMobile />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <TopBtn onClick={onClick} isScroll={isScroll} isMobile={false} />
      </MediaQuery>
    </ErrorBoundary>
  );
};

export default ScrollTopBtn;

const TopBtn = styled.button<{ isMobile: boolean; isScroll: boolean }>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          right: 1rem;
          bottom: 2rem;
        `
      : css`
          right: 2.5rem;
          bottom: 5rem;
        `};
  display: ${({ isScroll }) => (isScroll ? `inline-block` : `none`)};
  background-image: url("/icons/top.svg");
  background-position: center;
  position: fixed;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  border: solid 1px #bfbfbf;
  opacity: 0.9;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
`;
