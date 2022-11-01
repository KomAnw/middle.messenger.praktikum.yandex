import archive from "src/archive.json";

export const login = {
  type: "text",
  placeholderText: archive.forms.login.login,
};
export const password = {
  type: "password",
  placeholderText: archive.forms.login.password,
};

export const button = {
  text: archive.forms.login.button,
};

export const link = {
  url: "#",
  text: archive.forms.login.link,
};
