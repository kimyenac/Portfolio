import React from "react";
import "../src/styles/global.css";
import {
  Navigator,
  Home,
  Skills,
  Career,
  AboutMe,
  SideProject,
  ScrollTopBtn,
} from "./components";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled";

const App = () => {
  return (
    <RecoilRoot>
      <ScrollTopBtn />
      <Navigator />
      <Home />
      <Horizontal />
      <AboutMe />
      <Skills />
      <Career />
      <SideProject />
    </RecoilRoot>
  );
};

export default App;

const Horizontal = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 0;
  border-top: 1px solid #5bb3e9;

  :after {
    content: "◆";
    position: relative;
    top: -9px;
    left: calc(50% - 8px);
    color: #5bb3e9;
  }
`;
