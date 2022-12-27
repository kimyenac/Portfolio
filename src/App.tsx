import React from "react";
import {
  GlobalStyle,
  Navigator,
  Home,
  Skills,
  Career,
  AboutMe,
  SideProject,
  ScrollTopBtn,
} from "./components";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ScrollTopBtn />
      <Navigator />
      <Home />
      <AboutMe />
      <Skills />
      <Career />
      <SideProject />
    </RecoilRoot>
  );
};

export default App;
