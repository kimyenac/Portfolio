import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SectionHeightStore } from "../../store";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

/* 네비게이터 메뉴 리스트 */
const headerNavigatorList = [
  "Home",
  "About Me",
  "Skills",
  "Career",
  "Side Project",
];

/* 데스크탑 네비게이션 */
const DesktopNavigator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const homeHeight = useRecoilValue(SectionHeightStore.homeHeightStore);
  const [navigatorHeight, setNavigatorHeight] = useRecoilState(
    SectionHeightStore.navigatorHeightStore
  );

  useEffect(() => {
    if (ref.current) {
      setNavigatorHeight(ref.current.offsetHeight);
    }
  }, [setNavigatorHeight]);

  /* 선택된 메뉴 */
  const [selectNavigatorMenu, setSelectNavigatorMenu] = useState("Home");

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY < homeHeight - navigatorHeight) {
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
  }, [homeHeight, setSelectNavigatorMenu]);

  /* onClick 이벤트 */
  const onClick = ({ navigatorMenu }: { navigatorMenu: string }) => {
    if (navigatorMenu === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (navigatorMenu === "About Me") {
      window.scrollTo({
        top: homeHeight - navigatorHeight,
        behavior: "smooth",
      });
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
    <Wrap ref={ref}>
      <Container>
        <MainTitle>kimyena.c PortFolio</MainTitle>
        <NavigatorWrap>
          {headerNavigatorList.map((item) => (
            <li key={item}>
              <NavigatorButton
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

const Wrap = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  width: 100%;
  background-color: #fff;
`;

const Container = styled.div`
  padding: 1.25rem 2rem;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: rgb(69, 70, 73);
`;

const NavigatorWrap = styled.ul`
  display: flex;
  font-weight: bold;
  gap: 1rem;
`;

const NavigatorButton = styled.button<{ isSelectedMenu: boolean }>`
  ${({ isSelectedMenu }) =>
    isSelectedMenu
      ? css`
          color: rgb(69, 70, 73);
        `
      : css`
          color: rgb(160, 160, 160);
        `};

  :hover {
    color: #5bb3e9;
    cursor: pointer;
  }
`;
