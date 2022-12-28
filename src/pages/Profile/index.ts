import {appStore} from './../../modules/Store/Store';
import ChangePassword from '../ChangePassword/ChangePassword';
import {mokDataPassword, ProfileFields} from './constants';
import Profile from './Profile';
import {User} from 'src/modules/Store/types';

export const CommonProfile = () => {
  const user = (appStore.getState('user') as User) || ({} as User);

  const fieldsProps = ProfileFields.map((field) => ({
    ...field,
    data: user[field.inputName as keyof typeof user],
  }));

  const {first_name, second_name} = user;

  return Profile({
    name: `${first_name} ${second_name}`,
    avatarProps: {
      link: user?.avatar || undefined,
      alt: 'Аватар пользователя',
    },
    // @ts-expect-error
    fieldsProps,
    disabled: 'disabled',
  });
};

export const ChangebleProfile = () => {
  const user = (appStore.getState('user') as User) || ({} as User);
  const fieldsProps = ProfileFields.map((field) => ({
    ...field,
    data: user[field.inputName as keyof typeof user],
  }));

  const {first_name, second_name} = user;
  return Profile({
    name: `${first_name} ${second_name}`,
    avatarProps: {link: user.avatar || undefined, alt: 'Аватар пользователя'},
    // @ts-expect-error
    fieldsProps,
  });
};

export const ChangeProfilePassword = () => {
  const user = (appStore.getState('user') as User) || ({} as User);
  const {first_name, second_name} = user;

  return ChangePassword({
    name: `${first_name} ${second_name}`,
    avatarProps: {link: user.avatar || undefined, alt: 'Аватар пользователя'},
    fieldsProps: mokDataPassword,
  });
};
