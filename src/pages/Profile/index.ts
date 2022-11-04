import ChangePassword from "../ChangePassword/ChangePassword";
import Profile from "./Profile";

// ! this used only for test
export const mokData = [
  {
    fieldName: "Почта",
    data: "sweet-body1@gmail.com",
    inputName: "email",
    validationRules: {
      required: true,
      email: true,
    },
  },
  {
    fieldName: "Логин",
    data: "Родитель",
    inputName: "login",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Имя",
    data: "Родитель",
    inputName: "first_name",
    validationRules: {
      required: true,
      min: 3,
      witoutNumbers: true,
    },
  },
  {
    fieldName: "Фамилия",
    data: "РодительРодитель",
    inputName: "second_name",
    validationRules: {
      required: true,
      min: 3,
      witoutNumbers: true,
    },
  },
  {
    fieldName: "Имя в чате",
    data: "nextGenderGeneration",
    inputName: "display_name",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Телефон",
    data: "+79999999999",
    inputName: "phone",
    validationRules: {
      required: true,
      min: 3,
      max: 12,
      onlyNumbers: true,
      phone: true,
    },
  },
];

export const mokDataPassword = [
  {
    fieldName: "Старый пароль",
    data: "123213123",
    inputName: "oldPassword",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Новый пароль",
    data: "123123213",
    inputName: "newPassword",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Новый пароль (еще раз)",
    data: "12321312321",
    inputName: "newPassword_again",
    validationRules: {
      required: true,
      min: 3,
    },
  },
];

export const CommonProfile = Profile({
  name: "Герман",
  avatarProps: {},
  fieldsProps: mokData,
  disabled: "disabled",
});

export const ChangebleProfile = Profile({
  name: "Герман",
  avatarProps: {},
  fieldsProps: mokData,
});

export const ChangeProfilePassword = ChangePassword({
  name: "Герман",
  avatarProps: {},
  fieldsProps: mokDataPassword,
});
