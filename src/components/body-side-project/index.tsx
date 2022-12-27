import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import MediaQuery from "react-responsive";
import ErrorFallback from "../ErrorFallback";
import DesktopSideProject from "./DesktopSideProject";
import MobileSideProject from "./MobileSideProject";

/* body - SideProject */
const SideProject = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MediaQuery maxWidth={799}>
        <MobileSideProject></MobileSideProject>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <DesktopSideProject />
      </MediaQuery>
    </ErrorBoundary>
  );
};

export default SideProject;
