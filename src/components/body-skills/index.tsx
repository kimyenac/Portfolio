import styled from "styled-components";
import { useEffect, useState } from "react";
import { SkillsMockData } from "./types";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";

/* body - Skills */
const Skills = () => {
  const [skillList, setSkillList] = useState<SkillsMockData[]>([]);

  useEffect(() => {
    async function fetchSkillList() {
      const response = await fetch("/mock/skills_mock.json");
      const result = await response.json();
      setSkillList(result.data);
    }

    fetchSkillList();
  }, []);

  if (!skillList) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Container>
        <TitleWrap>
          <Title>Skills</Title>
        </TitleWrap>
        <SkillsWrap>
          {skillList.map((item) => (
            <SkillsContainer key={item.id}>
              <SkillsTitleWrap>
                <img src={item.skillsIcon} alt={item.skillsName} />
                <div>{item.skillsName}</div>
              </SkillsTitleWrap>
              <SkillWrap>
                {item.skillsList.map((data) => (
                  <Skill>{data}</Skill>
                ))}
              </SkillWrap>
            </SkillsContainer>
          ))}
        </SkillsWrap>
      </Container>
    </ErrorBoundary>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #5bb3e9;
  margin: 3.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: bold;
  padding-top: 3.5rem;
`;

const Title = styled.div`
  border-bottom: 1px solid #fff;
  color: #fff;
`;

const SkillsWrap = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: #fff;
  gap: 1.3rem;
  padding: 2rem;
  width: 80%;
  margin: auto;
  border-radius: 10px;
`;

const SkillsTitleWrap = styled.div`
  display: flex;
  font-size: 1.3rem;
  gap: 0.5rem;
`;

const SkillWrap = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  border: 1px solid #5bb3e9;
  padding: 0.5rem;
  border-radius: 1rem;

  :hover {
    background-color: #5bb3e9;
    color: #fff;
  }
`;
