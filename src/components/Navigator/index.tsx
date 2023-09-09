import DesktopNavigator from "./DesktopNavigator";
import MediaQuery from "react-responsive";
import MobileNavigator from "./MobileNavigator";

const Navigator = () => {
  return (
    <>
      <MediaQuery maxWidth={799}>
        <MobileNavigator />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopNavigator />
      </MediaQuery>
    </>
  );
};

export default Navigator;
