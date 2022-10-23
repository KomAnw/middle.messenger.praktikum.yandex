import ChangePassword from "../ChangePassword/ChangePassword";
import Profile from "./Profile";

// ! this used only for test
export const mokData = [
  { fieldName: "Почта", data: "sweet-body1@gmail.com" },
  { fieldName: "Логин", data: "Родитель1" },
  { fieldName: "Имя", data: "Родитель2" },
  { fieldName: "Фамилия", data: "Родитель1+Родитель2" },
  { fieldName: "Имя в чате", data: "nextGenderGeneration" },
  { fieldName: "Телефон", data: "+7 (999) 999 99 99" },
];

export const mokDataPassword = [
  { fieldName: "Старый пароль", data: "123213123" },
  { fieldName: "Новый пароль", data: "123123213" },
  { fieldName: "Новый пароль (еще раз)", data: "12321312321" },
];

export const CommonProfile = Profile({
  name: "Герман",
  avatarProps: {},
  fieldsProps: mokData,
  disabled: "disabled",
});
export const ChangebleProfile = Profile({ name: "Герман", avatarProps: {}, fieldsProps: mokData });

export const ChangeProfilePassword = ChangePassword({
  name: "Герман",
  avatarProps: {},
  fieldsProps: mokDataPassword,
});
