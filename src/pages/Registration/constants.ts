import archive from 'src/archive.json';

export const email = {
  type: 'email',
  name: 'email',
  placeholderText: archive.forms.registration.email,
  validationRules: {
    required: true,
    email: true,
  },
};

export const login = {
  type: 'text',
  name: 'login',
  placeholderText: archive.forms.registration.login,
  validationRules: {
    required: true,
    min: 3,
  },
};

export const firstName = {
  type: 'text',
  name: 'first_name',
  placeholderText: archive.forms.registration.firstName,
  validationRules: {
    required: true,
    min: 3,
    witoutNumbers: true,
  },
};

export const secondName = {
  type: 'text',
  name: 'second_name',
  placeholderText: archive.forms.registration.secondName,
  validationRules: {
    required: true,
    min: 3,
    witoutNumbers: true,
  },
};

export const phone = {
  type: 'tel',
  name: 'phone',
  placeholderText: archive.forms.registration.phone,
  validationRules: {
    required: true,
    min: 3,
    max: 12,
    onlyNumbers: true,
    phone: true,
  },
};

export const password = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.registration.password,
  validationRules: {
    required: true,
    min: 3,
  },
};

export const secondPassword = {
  type: 'password',
  name: 'password',
  placeholderText: archive.forms.registration.secondPassword,
  validationRules: {
    required: true,
    min: 3,
  },
};

export const button = {
  text: archive.forms.registration.button,
};

export const link = {
  url: '/login',
  text: archive.forms.registration.link,
};
