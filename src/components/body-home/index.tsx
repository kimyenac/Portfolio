import MediaQuery from "react-responsive";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";

/* body - Home */
const Home = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MediaQuery maxWidth={799}>
        <MobileHome />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopHome />
      </MediaQuery>
    </ErrorBoundary>
  );
};

export default Home;
