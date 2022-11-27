import { Locations } from "./types";

const {
  login,
  registration,
  home,
  chat,
  profile,
  changeProfileData,
  changePassword,
} = Locations;

export const locationPaths = [
  registration,
  login,
  home,
  chat,
  profile,
  changeProfileData,
  changePassword,
];

export const getSectionByPath = async (path: string | undefined) => {
  switch (path) {
    case registration:
      return (await import("src/pages/Registration/Registration")).default;
    case login:
      return (await import("src/pages/Login/Login")).default;
    case home:
    case chat:
      return (await import("src/pages/Chat/index")).default;
    case profile:
      return (await import("src/pages/Profile/index")).CommonProfile;
    case changeProfileData:
      return (await import("src/pages/Profile/index")).ChangebleProfile;
    case changePassword:
      return (await import("src/pages/Profile/index")).ChangeProfilePassword;
    default:
      return (await import("src/pages/404/index")).default;
  }
};
