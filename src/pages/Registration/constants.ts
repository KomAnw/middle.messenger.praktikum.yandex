import archive from 'src/archive.json';

export const email = {
  type: 'email',
  name: 'email',
  placeholderText: archive.forms.registration.email,
};

export const login = {
  type: 'text',
  name: 'login',
  placeholderText: archive.forms.registration.login,
};

export const firstName = {
  type: 'text',
  name: 'first_name',
  placeholderText: archive.forms.registration.firstName,
};

export const secondName = {
  type: 'text',
  name: 'second_name',
  placeholderText: archive.forms.registration.secondName,
};

export const phone = {
  type: 'tel',
  name: 'phone',
  placeholderText: archive.forms.registration.phone,
};

export const password = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.registration.password,
};

export const secondPassword = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.registration.secondPassword,
};

export const button = {
  text: archive.forms.registration.button,
};

export const link = {
  url: '/login',
  text: archive.forms.registration.link,
};
