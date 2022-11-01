import ChangePassword from '../ChangePassword/ChangePassword';
import Profile from './Profile';

// ! this used only for test
export const mokData = [
  {fieldName: 'Почта', data: 'sweet-body1@gmail.com', inputName: 'email'},
  {fieldName: 'Логин', data: 'Родитель1', inputName: 'login'},
  {fieldName: 'Имя', data: 'Родитель2', inputName: 'first_name'},
  {fieldName: 'Фамилия', data: 'Родитель1+Родитель2', inputName: 'second_name'},
  {fieldName: 'Имя в чате', data: 'nextGenderGeneration', inputName: 'display_name'},
  {fieldName: 'Телефон', data: '+7 (999) 999 99 99', inputName: 'phone'},
];

export const mokDataPassword = [
  {fieldName: 'Старый пароль', data: '123213123', inputName: 'oldPassword'},
  {fieldName: 'Новый пароль', data: '123123213', inputName: 'newPassword'},
  {fieldName: 'Новый пароль (еще раз)', data: '12321312321', inputName: 'newPassword'},
];

export const CommonProfile = Profile({
  name: 'Герман',
  avatarProps: {},
  fieldsProps: mokData,
  disabled: 'disabled',
});
export const ChangebleProfile = Profile({name: 'Герман', avatarProps: {}, fieldsProps: mokData});

export const ChangeProfilePassword = ChangePassword({
  name: 'Герман',
  avatarProps: {},
  fieldsProps: mokDataPassword,
});
