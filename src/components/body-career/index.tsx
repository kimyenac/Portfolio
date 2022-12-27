import ErrorFallback from "../ErrorFallback";
import MediaQuery from "react-responsive";
import { ErrorBoundary } from "react-error-boundary";
import DesktopCareer from "./DesktopCareer";
import MobileCareer from "./MobileCareer";
import { Suspense } from "react";

/* body - Career */
const Career = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MediaQuery maxWidth={799}>
        <MobileCareer />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopCareer />
      </MediaQuery>
    </ErrorBoundary>
  );
};

export default Career;
