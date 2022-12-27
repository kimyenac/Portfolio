import styled from "styled-components";
import { css, Global } from "@emotion/react";

/* 에러 발생 시 보여지는 화면 */
const ErrorFallback = () => {
  return (
    <Container>
      <GlobalStyle />
      <Message>
        에러가 발생하였습니다. <br /> 아래 버튼을 눌러 페이지를 새로
        고침해주세요!
      </Message>
      <Button onClick={() => window.location.reload()}>새로고침</Button>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 20;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  line-height: 1.5rem;
`;

/**
 * 배경 스크롤 막기
 */
const GlobalStyle = (): JSX.Element => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);

const Message = styled.div`
  text-align: center;
`;

const Button = styled.div`
  border: 1px solid #5bb3e9;
  background-color: #fff;
  border-radius: 10px;
  color: #5bb3e9;
  padding: 0.5rem 1rem;

  :hover {
    background-color: #5bb3e9;
    color: #fff;
    cursor: pointer;
  }
`;
