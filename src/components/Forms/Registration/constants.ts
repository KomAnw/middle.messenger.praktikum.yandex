import archive from "src/archive.json";

export const email = {
  type: "email",
  placeholderText: archive.forms.registration.email,
};

export const login = {
  type: "text",
  placeholderText: archive.forms.registration.login,
};

export const firstName = {
  type: "text",
  placeholderText: archive.forms.registration.firstName,
};

export const secondName = {
  type: "text",
  placeholderText: archive.forms.registration.secondName,
};

export const phone = {
  type: "tel",
  placeholderText: archive.forms.registration.phone,
};

export const password = {
  type: "password",
  placeholderText: archive.forms.registration.password,
};

export const secondPassword = {
  type: "password",
  placeholderText: archive.forms.registration.secondPassword,
};

export const button = {
  text: archive.forms.registration.button,
};

export const link = {
  url: "#",
  text: archive.forms.registration.link,
};
