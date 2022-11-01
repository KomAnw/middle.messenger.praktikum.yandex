import archive from 'src/archive.json';

export const login = {
  type: 'text',
  name: 'login',
  placeholderText: archive.forms.login.login,
};
export const password = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.login.password,
};

export const button = {
  text: archive.forms.login.button,
};

export const link = {
  url: '/registration',
  text: archive.forms.login.link,
};
