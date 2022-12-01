export const ProfileFields = [
  {
    fieldName: "Почта",
    data: "",
    inputName: "email",
    validationRules: {
      required: true,
      email: true,
    },
  },
  {
    fieldName: "Логин",
    data: "",
    inputName: "login",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Имя",
    data: "",
    inputName: "first_name",
    validationRules: {
      required: true,
      min: 3,
      witoutNumbers: true,
    },
  },
  {
    fieldName: "Фамилия",
    data: "",
    inputName: "second_name",
    validationRules: {
      required: true,
      min: 3,
      witoutNumbers: true,
    },
  },
  {
    fieldName: "Имя в чате",
    data: "",
    inputName: "display_name",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Телефон",
    data: "",
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
    data: "",
    inputName: "oldPassword",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Новый пароль",
    data: "",
    inputName: "newPassword",
    validationRules: {
      required: true,
      min: 3,
    },
  },
  {
    fieldName: "Новый пароль (еще раз)",
    data: "",
    inputName: "newPassword_again",
    validationRules: {
      required: true,
      min: 3,
    },
  },
];
