import styled from "styled-components";
import { useEffect, useState } from "react";
import { CareerMockResponse } from "./types";
import { useOpenProjectModal } from "./hook";
import DesktopMainProjectModal from "./DesktopMainProjectModal";

/* body - Desktop > Career */
const DesktopCareer = () => {
  const [careerList, setCareerList] = useState<CareerMockResponse[]>([]);

  const { openProjectModalQuarter, onCloseProjectModal, onOpenProjectModal } =
    useOpenProjectModal();

  useEffect(() => {
    async function fetchCareerList() {
      const response = await fetch("/mock/career_miridih_mock.json");
      const result = await response.json();
      setCareerList(result.data);
    }

    fetchCareerList();
  }, []);

  if (!careerList) {
    return <></>;
  }

  return (
    <Container>
      <TitleWrap>
        <Title>Career</Title>
      </TitleWrap>
      <CareerWrap>
        <LeftContainer>
          <CompanyImgWrap>
            <CompanyImg src="/icons/career/miridih_logo.webp" />
          </CompanyImgWrap>
        </LeftContainer>
        <RightContainer>
          <CompanyInfoWrap>
            <CompanyName>(주) 미리디</CompanyName>
            <AssignPeriod>2022.07. - 현재</AssignPeriod>
            <CompanyInfo>
              누구나 디자인 걱정없이 언제, 어디서나 쉽고 빠르게 디자인을 할 수
              있는 경험을 제공하는 디자인 및 제작 서비스 플랫폼을 운영하는
              기업입니다.
            </CompanyInfo>
            <DetailCompanyInfo>
              기본적으로는 React 기반의 프론트엔드 개발을 담당하고 있으며,
              전체적인{" "}
              <a target="_blank" href="https://www.bizhows.com/">
                비즈하우스 웹
              </a>{" "}
              과
              <a target="_blank" href="https://www.miricanvas.com/">
                {" "}
                미리캔버스 우패널
              </a>{" "}
              을 작업하고 있습니다. 또한, 동료 개발자의 작업에 대한 코드 리뷰나
              프로젝트 기획에 참여하는 등 기타 업무까지 함께 담당하고 있으며,
              BitBucket, BamBoo, Jira, Confluence, IntelliJ, Slack, Figma,
              Zeplin 툴로 개발, 비개발 직군과 협업합니다.
            </DetailCompanyInfo>
          </CompanyInfoWrap>
          <HorizontalGap />
          <DetailCareerWrap>
            <MainProjectBold>
              ▎ 볼드체는 담당으로 진행한 메인 프로젝트 입니다.
            </MainProjectBold>
            <QuarterProject>
              {careerList.map((item) => (
                <DetailCareerContainer key={item.id}>
                  <DetailCareerQuarter>
                    {item.careerQuarter}
                  </DetailCareerQuarter>
                  <ul>
                    {item.careerInfo.map((data) => (
                      <DetailCareerInfo>{data}</DetailCareerInfo>
                    ))}
                  </ul>
                  <ul>
                    {item.mainProject.map((data) => (
                      <DetailCareerMainInfo>{data}</DetailCareerMainInfo>
                    ))}
                  </ul>
                  <MainProjectBtn
                    onClick={() =>
                      onOpenProjectModal({ quarter: item.careerQuarter })
                    }
                  >
                    메인 프로젝트 자세히 보기 👀
                  </MainProjectBtn>
                  {openProjectModalQuarter === item.careerQuarter && (
                    <DesktopMainProjectModal
                      openProjectModalQuarter={openProjectModalQuarter}
                      onCloseProjectModal={onCloseProjectModal}
                    />
                  )}
                </DetailCareerContainer>
              ))}
            </QuarterProject>
          </DetailCareerWrap>
        </RightContainer>
      </CareerWrap>
    </Container>
  );
};

export default DesktopCareer;

const Container = styled.div`
  width: 100%;
  //height: 100vh;
  height: 100%;
  background-color: #fff;
  margin: 3.5rem 0 5rem;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  margin: 0 0 3rem;
  font-weight: bold;
`;

const Title = styled.div`
  border-bottom: 1px solid rgb(160, 160, 160);
  color: rgb(69, 70, 73);
`;

const CareerWrap = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: center;
  margin: auto;
  gap: 2rem;
  align-items: stretch;
`;

const LeftContainer = styled.div`
  border-right: 1px solid #ccc;
  padding-right: 2rem;
`;

const CompanyImgWrap = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  border: 1px solid #ccc;
  background-color: #fff;
  position: relative;
`;

const CompanyImg = styled.img`
  width: 80%;
  display: block;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 0;
`;

const CompanyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const CompanyName = styled.div`
  font-weight: 900;
  font-size: 1.5rem;
`;

const AssignPeriod = styled.div`
  color: rgb(160, 160, 160);
`;

const CompanyInfo = styled.div`
  line-height: 1.5rem;
`;

const DetailCompanyInfo = styled.div`
  line-height: 1.5rem;

  a {
    color: #5bb3e9;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline #5bb3e9;
  }
`;

const HorizontalGap = styled.div`
  background-color: #ccc;
  height: 1px;
`;

const DetailCareerWrap = styled.div`
  margin-top: 1rem;
`;

const MainProjectBold = styled.div`
  font-weight: bold;
`;

const QuarterProject = styled.div``;

const DetailCareerContainer = styled.div`
  padding: 2.3rem 0;
  position: relative;
`;

const DetailCareerQuarter = styled.div`
  font-weight: 700;
  color: rgb(160, 160, 160);
  font-size: 1.1rem;
`;

const DetailCareerInfo = styled.li`
  line-height: 1.5rem;
  list-style: circle;
`;

const DetailCareerMainInfo = styled.li`
  font-weight: bold;
  line-height: 1.5rem;
  list-style: outside;
`;

const MainProjectBtn = styled.button`
  border: 1px solid #5bb3e9;
  border-radius: 10px;
  color: #5bb3e9;
  padding: 0.7rem 1.2rem;
  position: absolute;
  right: 0;

  :hover {
    background-color: #5bb3e9;
    color: #fff;
    cursor: pointer;
  }
`;
