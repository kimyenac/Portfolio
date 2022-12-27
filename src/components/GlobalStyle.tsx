import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans KR", sans-serif;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        button {
          background: none;
          border: none;
        }

        ul,
        li {
          list-style: none;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        input,
        button,
        textarea {
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
        }
      `}
    ></Global>
  );
};

export default GlobalStyle;
