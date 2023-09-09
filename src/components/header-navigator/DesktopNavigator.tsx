import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navigatorMenu } from "./store/navigatorMenuStore";
import { HeaderNavigatorMenu } from "./types";
import { SectionHeightStore } from "../../store";

/* 데스크탑 네비게이션 */
const DesktopNavigator = ({
  headerNavigatorList,
}: {
  headerNavigatorList: HeaderNavigatorMenu[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const setNavigatorHeight = useSetRecoilState(
    SectionHeightStore.navigatorHeightStore
  );

  useEffect(() => {
    if (ref.current) {
      setNavigatorHeight(ref.current.offsetHeight);
    }
  }, [setNavigatorHeight]);

  /* 선택된 메뉴 */
  const [selectNavigatorMenu, setSelectNavigatorMenu] =
    useRecoilState(navigatorMenu);

  /* 스크롤이 150 이상 내려가면 isScroll을 true, 미만이면 false */
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 150) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      if (window.scrollY <= 680) {
        setSelectNavigatorMenu("Home");
        return;
      }

      if (window.scrollY <= 1459) {
        setSelectNavigatorMenu("About Me");
        return;
      }

      if (window.scrollY <= 2049) {
        setSelectNavigatorMenu("Skills");
        return;
      }

      if (window.scrollY <= 3169) {
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

  /* onClick 이벤트 */
  const onClick = ({
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
      window.scrollTo({ top: 720, behavior: "smooth" });
    }
    if (navigatorMenu === "Skills") {
      window.scrollTo({ top: 1460, behavior: "smooth" });
    }
    if (navigatorMenu === "Career") {
      window.scrollTo({ top: 2050, behavior: "smooth" });
    }
    if (navigatorMenu === "Side Project") {
      window.scrollTo({ top: 3170, behavior: "smooth" });
    }
  };

  return (
    <Wrap ref={ref} isScroll={isScroll}>
      <Container>
        <MainTitle isScroll={isScroll}>kimyena.c PortFolio</MainTitle>
        <NavigatorWrap>
          {headerNavigatorList.map((item) => (
            <li key={item}>
              <NavigatorButton
                isScroll={isScroll}
                onClick={() => onClick({ navigatorMenu: item })}
                isSelectedMenu={selectNavigatorMenu === item}
              >
                {item}
              </NavigatorButton>
            </li>
          ))}
        </NavigatorWrap>
      </Container>
    </Wrap>
  );
};

export default DesktopNavigator;

const Wrap = styled.div<{ isScroll: boolean }>`
  z-index: 10;
  position: fixed;
  top: 0;
  box-shadow: ${({ isScroll }) =>
    isScroll ? `0 1px 0.3rem hsl(0deg 0% 80% / 80%)` : ``};
  width: 100%;
  background: ${({ isScroll }) =>
    isScroll
      ? `#fff`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)`};
`;

const Container = styled.div`
  padding: 1.25rem 2rem;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const MainTitle = styled.div<{ isScroll: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${({ isScroll }) =>
    isScroll ? `rgb(69, 70, 73)` : `rgb(228, 242, 255)`};
`;

const NavigatorWrap = styled.ul`
  display: flex;
  font-weight: bold;
  gap: 1rem;
`;

const NavigatorButton = styled.button<{
  isSelectedMenu: boolean;
  isScroll: boolean;
}>`
  ${({ isSelectedMenu, isScroll }) =>
    isSelectedMenu &&
    isScroll &&
    css`
      color: rgb(69, 70, 73);
    `};
  ${({ isSelectedMenu, isScroll }) =>
    !isSelectedMenu &&
    isScroll &&
    css`
      color: rgb(160, 160, 160);
    `};
  ${({ isSelectedMenu }) =>
    isSelectedMenu &&
    css`
      color: #5bb3e9;
    `};
  ${({ isSelectedMenu, isScroll }) =>
    !isSelectedMenu &&
    !isScroll &&
    css`
      color: rgb(228, 242, 255);
    `};

  :hover {
    color: #5bb3e9;
    cursor: pointer;
  }
`;
