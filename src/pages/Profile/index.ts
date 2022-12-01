import appStoreProxy from "src/modules/Store/Store";
import ChangePassword from "../ChangePassword/ChangePassword";
import { mokDataPassword, ProfileFields } from "./constants";
import Profile from "./Profile";

export const CommonProfile = () => {
  const { user } = appStoreProxy;
  const fieldsProps = ProfileFields.map((field) => ({
    ...field,
    data: user[field.inputName],
  }));

  const { first_name, second_name } = user;

  return Profile({
    name: `${first_name} ${second_name}`,
    avatarProps: { link: user.avatar || undefined, alt: "Аватар пользователя" },
    fieldsProps,
    disabled: "disabled",
  });
};

export const ChangebleProfile = () => {
  const { user } = appStoreProxy;
  const fieldsProps = ProfileFields.map((field) => ({
    ...field,
    data: user[field.inputName],
  }));

  const { first_name, second_name } = user;
  return Profile({
    name: `${first_name} ${second_name}`,
    avatarProps: { link: user.avatar || undefined, alt: "Аватар пользователя" },
    fieldsProps,
  });
};

export const ChangeProfilePassword = () => {
  const { user } = appStoreProxy;
  const { first_name, second_name } = user;

  return ChangePassword({
    name: `${first_name} ${second_name}`,
    avatarProps: {},
    fieldsProps: mokDataPassword,
  });
};
