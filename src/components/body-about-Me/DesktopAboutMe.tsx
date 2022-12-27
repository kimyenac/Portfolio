import styled from "styled-components";
import { useEffect, useState } from "react";
import { AboutMeProfile } from "./types";

/* body - Desktop > About Me */
const DesktopAboutMe = () => {
  const [profileList, setProfileList] = useState<AboutMeProfile[]>([]);

  useEffect(() => {
    async function fetchProfileList() {
      const response = await fetch("/mock/about_me_profile_mock.json");
      const result = await response.json();
      setProfileList(result.data);
    }

    fetchProfileList();
  }, []);

  if (!profileList) {
    return <></>;
  }

  return (
    <Container>
      <TitleWrap>
        <Title>About Me</Title>
      </TitleWrap>
      <ProfileWrap>
        <ProfileImg
          src="/icons/about_me_profile/profile_img.jpg"
          alt="profile_image"
        />
        <ProfileDetail>
          {profileList.map((item) => (
            <Profile
              isPaddingLeft={item.profileName !== "Date of Birth"}
              key={item.id}
            >
              <ProfileLeft>
                <ProfileIcon src={item.profileIcon} />
                <ProfileName>{item.profileName}</ProfileName>
              </ProfileLeft>
              <ProfileDescriptionWrap>
                {item.profileDescription.map((data) =>
                  !data.url ? (
                    <ProfileDescription key={data.id}>
                      {data.name}
                    </ProfileDescription>
                  ) : (
                    <ProfileDescriptionUrl
                      key={data.id}
                      target={"_blank"}
                      href={data.url}
                    >
                      {data.name}
                    </ProfileDescriptionUrl>
                  )
                )}
              </ProfileDescriptionWrap>
            </Profile>
          ))}
        </ProfileDetail>
      </ProfileWrap>
    </Container>
  );
};

export default DesktopAboutMe;

const Container = styled.div`
  width: 100%;
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

const ProfileWrap = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ProfileImg = styled.img`
  width: 35%;
  height: 35%;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 2.5rem;
`;

const Profile = styled.div<{ isPaddingLeft: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding-left: ${({ isPaddingLeft }) => (isPaddingLeft ? `3px` : ``)};
`;

const ProfileLeft = styled.div`
  display: flex;
  gap: 0.8rem;
  min-width: 157px;
`;

const ProfileIcon = styled.img`
  margin-bottom: 3px;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

const ProfileDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const ProfileDescription = styled.div`
  font-size: 1rem;
  padding-bottom: 2px;
  color: rgb(69, 70, 73);
`;

const ProfileDescriptionUrl = styled.a`
  text-decoration: none;
  color: #5bb3e9;

  :hover {
    text-decoration: underline #5bb3e9;
  }
`;
