import Login from "src/pages/Login/Login";
import {
  ChangebleProfile,
  ChangeProfilePassword,
  CommonProfile,
} from "src/pages/Profile/index";
import Registration from "src/pages/Registration/Registration";
import ClientError from "src/pages/404/index";
import { Locations, Sections } from "./types";
import ChatElement from "src/pages/Chat";
import { getUserInfo } from "src/api/Auth/Auth";
import { appStore } from "../Store/Store";

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
  let route;
  switch (path) {
    case registration:
      return Registration;
    case login:
      return Login;
    case home:
    case chat:
      route = await ProtectedRoute(ChatElement);
      return route;
    case profile:
      route = await ProtectedRoute(CommonProfile);
      return route;
    case changeProfileData:
      route = await ProtectedRoute(ChangebleProfile);
      return route;
    case changePassword:
      route = await ProtectedRoute(ChangeProfilePassword);
      return route;
    default:
      return ClientError;
  }
};

const ProtectedRoute = async (requiredSection: Sections) => {
  if (appStore.getState("user")) {
    return requiredSection;
  }

  const response = await getUserInfo();
  if (response.status === 200) {
    appStore.setState("user", response.json());
    return requiredSection;
  }

  return Login;
};

export const goHome = () => window.history.pushState("/", "", "/");
export const goChat = () => window.history.pushState("/chat", "", "/chat");
export const goLogin = () => window.history.pushState("/login", "", "/login");
export const goCommonProfile = () =>
  window.history.pushState("/profile", "", "/profile");
export const goChangeProfileData = () =>
  window.history.pushState("/change-profile-data", "", "/change-profile-data");
export const goChangeProfilePassword = () =>
  window.history.pushState("/change-password", "", "/change-password");
