import MediaQuery from "react-responsive";
import DesktopAboutMe from "./DesktopAboutMe";
import MobileAboutMe from "./MobileAboutMe";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";

/* body - About Me */
const AboutMe = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MediaQuery maxWidth={799}>
        <MobileAboutMe />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopAboutMe />
      </MediaQuery>
    </ErrorBoundary>
  );
};

export default AboutMe;
