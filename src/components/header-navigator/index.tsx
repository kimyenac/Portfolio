import DesktopNavigator from "./DesktopNavigator";
import MediaQuery from "react-responsive";
import MobileNavigator from "./MobileNavigator";
import { HeaderNavigatorMenu } from "./types";

/* 헤더 - 네비게이터 (메뉴) */
const Navigator = () => {
  /* 네비게이터 메뉴 리스트 */
  const headerNavigatorList: HeaderNavigatorMenu[] = [
    "Home",
    "About Me",
    "Skills",
    "Career",
    "Side Project",
  ];

  return (
    <>
      <MediaQuery maxWidth={799}>
        <MobileNavigator headerNavigatorList={headerNavigatorList} />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopNavigator headerNavigatorList={headerNavigatorList} />
      </MediaQuery>
    </>
  );
};

export default Navigator;
