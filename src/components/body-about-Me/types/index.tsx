type ProfileDescriptionItem = {
  id: string;
  name: string;
  url?: string;
};

export type AboutMeProfile = {
  id: string;
  profileIcon: string;
  profileName: string;
  profileDescription: ProfileDescriptionItem[];
};
