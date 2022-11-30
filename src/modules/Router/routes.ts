import Login from "src/pages/Login/Login";
import {
  ChangebleProfile,
  ChangeProfilePassword,
  CommonProfile,
} from "src/pages/Profile/index";
import Registration from "src/pages/Registration/Registration";
import ClientError from "src/pages/404/index";
import { Locations, Sections } from "./types";
import appStoreProxy from "../Store/Store";
import ChatElement from "src/pages/Chat";
import { getUserInfo } from "src/api/Auth/Auth";
import { createSlice } from "../Store/slice";

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
      return Registration;
    case login:
      return Login;
    case home:
    case chat:
      return await ProtectedRoute(ChatElement);
    case profile:
      return await ProtectedRoute(CommonProfile);
    case changeProfileData:
      return await ProtectedRoute(ChangebleProfile);
    case changePassword:
      return await ProtectedRoute(ChangeProfilePassword);
    default:
      return ClientError;
  }
};

const ProtectedRoute = async (requiredSection: Sections) => {
  if (appStoreProxy.user) {
    return requiredSection;
  }

  const response = await getUserInfo();
  if (response.status === 200) {
    createSlice("user", response.json());
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
