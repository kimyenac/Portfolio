import styled from "styled-components";
import { ProjectListResponse, ProjectModalProps } from "./types";
import { css, Global } from "@emotion/react";
import { useState } from "react";
import { quarterProjectList } from "./service";

/* 메인 프로젝트 모달 > Mobile */
const MainProjectModal = ({
  onCloseProjectModal,
  openProjectModalQuarter,
}: ProjectModalProps) => {
  let projectList: ProjectListResponse[] | [] = [];

  for (const item of quarterProjectList.data) {
    if (item.quarter === openProjectModalQuarter) {
      projectList = item.projectList;
    }
  }

  const [currentCarouselNum, setCurrentCarouselNum] = useState(0);

  const onPrevClick = () => {
    setCurrentCarouselNum((prev) =>
      prev === 0 ? projectList.length - 1 : prev - 1
    );
  };

  const onNextClick = () => {
    setCurrentCarouselNum((prev) =>
      prev === projectList.length - 1 ? 0 : prev + 1
    );
  };

  if (!projectList) {
    return <></>;
  }

  console.log("projectList", projectList);

  return (
    <Wrap isOpenProjectModal={openProjectModalQuarter !== ""}>
      <Overlay>
        <GlobalStyle isOpenProjectModal={openProjectModalQuarter !== ""} />
        <Container>
          <ProjectName>
            {projectList[currentCarouselNum].name}
            <CloseBtn onClick={onCloseProjectModal}>
              <CloseBtnIcon resource="/icons/project_modal/close.svg" />
            </CloseBtn>
          </ProjectName>
          <DescriptionWrap>
            <PrevButton onClick={onPrevClick}>
              <i resource="/icons/prev.svg" />
            </PrevButton>
            <VideoWrap>
              {!!projectList[currentCarouselNum].video && (
                <video
                  src={projectList[currentCarouselNum].video}
                  controls
                  width="100%"
                  height="100%"
                />
              )}
              {!projectList[currentCarouselNum].video && (
                <img src="/icons/project_modal/etc.jpg" />
              )}
            </VideoWrap>
            <NextButton onClick={onNextClick}>
              <i resource="/icons/next.svg" />
            </NextButton>
            <EtcWrap>
              <Date>{projectList[currentCarouselNum].date}</Date>
              <Skills>
                ✔️ 기술 스택 :{" "}
                {projectList[currentCarouselNum].skill.join(", ")}
              </Skills>
              <DetailDescription>
                {projectList[currentCarouselNum].description}
              </DetailDescription>
            </EtcWrap>
          </DescriptionWrap>
        </Container>
      </Overlay>
    </Wrap>
  );
};

export default MainProjectModal;

const Wrap = styled.div<{ isOpenProjectModal: boolean }>`
  display: ${({ isOpenProjectModal }) => (isOpenProjectModal ? `` : `none`)};
`;

const Overlay = styled.div`
  display: flex;
  z-index: 15;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * 배경 스크롤 막기
 */
const GlobalStyle = ({
  isOpenProjectModal,
}: {
  isOpenProjectModal: boolean;
}): JSX.Element => (
  <>
    {isOpenProjectModal && (
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
    )}
  </>
);

const Container = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.251);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ProjectName = styled.div`
  padding: 10px 10px 10px 15px;
  background: rgb(69, 70, 73);
  color: #fff;
  line-height: 1.3rem;
  display: flex;
  position: relative;
  font-weight: 500;
`;

const CloseBtn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 10px;
`;

const CloseBtnIcon = styled.i`
  background: #fff;
  mask: url("/icons/project_modal/close.svg");
  width: 24px;
  height: 24px;
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: scroll;
`;

const PrevButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0.8rem;
  top: 9.5rem;

  i {
    width: 20px;
    height: 20px;
    background: #fff;
    mask: url("/icons/project_modal/prev.svg");
    position: absolute;
    left: 3px;
    top: 3px;
  }
`;

const NextButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.8rem;
  top: 9.5rem;

  i {
    width: 20px;
    height: 20px;
    background: #fff;
    mask: url("/icons/project_modal/next.svg");
    position: absolute;
    top: 3px;
  }
`;

const VideoWrap = styled.div`
  background-color: rgb(69, 70, 73);
  width: 70%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const EtcWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.3rem;
  padding: 0 1rem;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(160, 160, 160);
  font-weight: 600;
`;

const Skills = styled.div`
  color: rgb(69, 70, 73);
  display: flex;
  font-weight: bold;
`;

const DetailDescription = styled.div`
  color: rgb(69, 70, 73);
  display: flex;
`;
