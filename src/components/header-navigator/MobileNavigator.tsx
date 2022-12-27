import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { navigatorMenu } from "./store/navigatorMenuStore";
import { HeaderNavigatorMenu } from "./types";

/* 모바일 네비게이션 */
const MobileNavigator = ({
  headerNavigatorList,
}: {
  headerNavigatorList: HeaderNavigatorMenu[];
}) => {
  /* 선택된 메뉴 */
  const [selectNavigatorMenu, setSelectNavigatorMenu] =
    useRecoilState(navigatorMenu);

  /* 메뉴가 오픈되어 있으면 true, 오픈되어 있지 않으면 false */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY <= 607) {
        setSelectNavigatorMenu("Home");
        return;
      }
      if (window.scrollY <= 1703) {
        setSelectNavigatorMenu("About Me");
        return;
      }
      if (window.scrollY <= 2559) {
        setSelectNavigatorMenu("Skills");
        return;
      }
      if (window.scrollY <= 3947) {
        setSelectNavigatorMenu("Career");
        return;
      }
      setSelectNavigatorMenu("Side Project");
    };

    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, [setSelectNavigatorMenu]);

  /* menuOnClick 이벤트 */
  const menuOnClick = ({
    navigatorMenu,
  }: {
    navigatorMenu: HeaderNavigatorMenu;
  }) => {
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
    if (navigatorMenu === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (navigatorMenu === "About Me") {
      window.scrollTo({ top: 644, behavior: "smooth" });
    }
    if (navigatorMenu === "Skills") {
      window.scrollTo({ top: 1704, behavior: "smooth" });
    }
    if (navigatorMenu === "Career") {
      window.scrollTo({ top: 2560, behavior: "smooth" });
    }
    if (navigatorMenu === "Side Project") {
      window.scrollTo({ top: 3948, behavior: "smooth" });
    }
    setSelectNavigatorMenu(navigatorMenu);
  };

  return (
    <Wrap>
      <Container isMenuOpen={isMenuOpen}>
        <MainTitle isMenuOpen={isMenuOpen}>kimyena.c PortFolio</MainTitle>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={"/icons/menu.svg"} />
        </MenuButton>
      </Container>
      <NavigatorWrap isMenuOpen={isMenuOpen}>
        {headerNavigatorList.map((item, idx) => (
          <li key={idx}>
            <NavigatorButton
              onClick={() => {
                menuOnClick({ navigatorMenu: item });
                setIsMenuOpen(false);
              }}
              isSelectedMenu={selectNavigatorMenu === item}
            >
              {item}
            </NavigatorButton>
          </li>
        ))}
      </NavigatorWrap>
    </Wrap>
  );
};

export default MobileNavigator;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 56px;
`;

const Container = styled.div<{ isMenuOpen: boolean }>`
  padding: 1.25rem 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: #fff;
  z-index: 11;
  position: relative;
`;

const MainTitle = styled.div<{ isMenuOpen: boolean }>`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: rgb(69, 70, 73);
`;

const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
  }
`;

const NavigatorWrap = styled.ul<{ isMenuOpen: boolean }>`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem 0 1.5rem 1.2rem;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? `translateY(0)` : `translateY(-300px)`};
  transition: transform 1s;
  z-index: 10;
`;

const NavigatorButton = styled.button<{
  isSelectedMenu: boolean;
}>`
  ${({ isSelectedMenu }) =>
    !isSelectedMenu &&
    css`
      color: rgb(160, 160, 160);
    `};
  ${({ isSelectedMenu }) =>
    isSelectedMenu &&
    css`
      color: #5bb3e9;
    `};

  :hover {
    color: #5bb3e9;
    cursor: pointer;
  }
`;
