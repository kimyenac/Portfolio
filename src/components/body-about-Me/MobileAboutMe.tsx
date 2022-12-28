import styled from "styled-components";
import { AboutMeProfile } from "./types";
import useSWR from "swr";
import mockFetcher from "../mockFetcher";

/* body - Mobile > About Me */
const MobileAboutMe = () => {
  const { data: profileList } = useSWR<AboutMeProfile[]>(
    "/about_me_profile_mock.json",
    mockFetcher
  );

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
            <Profile key={item.id}>
              <ProfileLeft
                isPaddingLeft={
                  item.profileName !== "Date of Birth" &&
                  item.profileName !== "Contact Me"
                }
              >
                <ProfileIcon>
                  <img src={item.profileIcon} />
                </ProfileIcon>
                <ProfileName>{item.profileName}</ProfileName>
              </ProfileLeft>
              <ProfileDescriptionWrap>
                {item.profileDescription.map((data) =>
                  !data.url ? (
                    <ProfileDescription key={data.id}>
                      {data.name}
                    </ProfileDescription>
                  ) : (
                    <ProfileDescriptionUrl href={data.url}>
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

export default MobileAboutMe;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: 3rem 0;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 0 0 2.5rem;
  font-weight: bold;
`;

const Title = styled.div`
  border-bottom: 1px solid rgb(160, 160, 160);
  color: rgb(69, 70, 73);
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 80%;
  height: 80%;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 0;
  gap: 1.8rem;
`;

const Profile = styled.div`
  margin-right: 100px;
  display: flex;
  align-items: flex-start;
  gap: 0.3rem;
  flex-direction: column;
`;

const ProfileLeft = styled.div<{ isPaddingLeft: boolean }>`
  display: flex;
  padding-left: ${({ isPaddingLeft }) => (isPaddingLeft ? `3px` : ``)};
`;

const ProfileIcon = styled.div`
  min-width: 38px;

  img {
    margin-bottom: 3px;
  }
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const ProfileDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 41px;
`;

const ProfileDescription = styled.div`
  padding-bottom: 2px;
  color: rgb(69, 70, 73);
  font-size: 0.9rem;
`;

const ProfileDescriptionUrl = styled.a`
  text-decoration: none;
  color: rgb(69, 70, 73);
  font-size: 0.9rem;

  :hover {
    color: #5bb3e9;
  }
`;
