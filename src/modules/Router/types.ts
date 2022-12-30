/* eslint-disable */
import Registration from "src/pages/Registration/Registration";
import Login from "src/pages/Login/Login";
import ChatElement from "src/pages/Chat";
import {
  ChangebleProfile,
  CommonProfile,
  ChangeProfilePassword,
} from "src/pages/Profile";

export enum Locations {
  home = "/",
  registration = "/registration",
  login = "/login",
  chat = "/chat",
  profile = "/profile",
  changeProfileData = "/change-profile-data",
  changePassword = "/change-password",
}

type Chat = typeof ChatElement;
type Login = typeof Login;
type Registration = typeof Registration;
type Profile = typeof CommonProfile;
type ChangeProfileData = typeof ChangebleProfile;
type ChangeProfile = typeof ChangeProfilePassword;

export type Sections =
  | Login
  | Registration
  | Chat
  | Profile
  | ChangeProfileData
  | ChangeProfile;
