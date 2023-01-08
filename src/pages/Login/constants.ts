import archive from 'src/archive.json';

export const login = {
  type: 'text',
  name: 'login',
  placeholderText: archive.forms.login.login,
  validationRules: {
    required: true,
    min: 3
  }
};

export const password = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.login.password,
  validationRules: {
    required: true,
    min: 3
  }
};

export const button = {
  text: archive.forms.login.button
};

export const link = {
  url: '/registration',
  text: archive.forms.login.link
};
