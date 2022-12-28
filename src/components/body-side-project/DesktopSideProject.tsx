import styled from "styled-components";
import { PortfolioDescription, SlidoDescription } from "./Description";
import DesktopPicCarousel from "./DesktopPicCarousel";
import { SideProjectResponse } from "./types";
import useSWR from "swr";
import mockFetcher from "../mockFetcher";

/* body - Desktop > SideProject */
const DesktopSideProject = () => {
  const { data: projectList } = useSWR<SideProjectResponse[]>(
    "/side_project_mock.json",
    mockFetcher
  );

  if (!projectList) {
    return <></>;
  }

  return (
    <Wrap>
      <TitleWrap>
        <Title>Side Project</Title>
      </TitleWrap>
      <ProjectContainer>
        {projectList.map((item) => (
          <Container key={item.id}>
            <ProjectTitle>{item.title}</ProjectTitle>
            <Date>{item.date}</Date>
            <ProjectWrap>
              <DesktopPicCarousel carouselList={item.picture} />
              <DescriptionWrap>
                {item.title === "Slido 클론 코딩 프로젝트" && (
                  <SlidoDescription />
                )}
                {item.title === "포트폴리오 웹사이트" && (
                  <PortfolioDescription />
                )}
                <HorizontalGap />
                <Mvp>
                  <b>✔️ 주요 기능</b> {item.mvp}
                </Mvp>
                <Skills>
                  <b>✔️ 기술 스택 </b> {item.skills.join(", ")}
                </Skills>
                <CommonLink href={item.deploymentLink}>✔️ 배포 링크</CommonLink>
                <CommonLink href={item.githubLink}>
                  ✔️ 소스코드 깃허브 링크
                </CommonLink>
                <CommonLink href={item.tistoryLink}>
                  ✔️ 티스토리 링크
                </CommonLink>
              </DescriptionWrap>
            </ProjectWrap>
          </Container>
        ))}
      </ProjectContainer>
    </Wrap>
  );
};

export default DesktopSideProject;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #5bb3e9;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3.5rem 0;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: bold;
`;

const Title = styled.div`
  border-bottom: 1px solid #fff;
  color: #fff;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Container = styled.div`
  width: 800px;
  background-color: #fff;
  margin: auto;
  padding: 2.3rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  gap: 0.5rem;
`;

const ProjectTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
`;

const Date = styled.div`
  color: rgb(160, 160, 160);
  line-height: 1.3rem;
  font-size: 0.9rem;
`;

const ProjectWrap = styled.div``;

const DescriptionWrap = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;
  font-size: 0.95rem;
`;

const HorizontalGap = styled.div`
  background-color: #ccc;
  height: 1px;
`;

const Mvp = styled.div``;

const Skills = styled.div``;

const CommonLink = styled.a`
  color: #5bb3e9;
  text-decoration: none;

  :hover {
    text-decoration: underline #5bb3e9;
  }
`;
