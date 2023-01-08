import Fetch from 'src/modules/Fetch/Fetch';
import { FetchOptions, METHODS } from 'src/modules/Fetch/types';
import { ChangePasswordFormData } from 'src/pages/ChangePassword/types';
import { ChangeProfileFormData } from 'src/pages/Profile/types';
import addInstancePath from 'src/utils/generateUrl';
import { USER } from '../constants';
import { ContentTypes } from '../types';
import { UserOperations } from './types';

const { POST, PUT } = METHODS;
const { applicationJSON } = ContentTypes;
const generateUrl = addInstancePath(USER);

const basePutOptions: FetchOptions = {
  methodType: PUT,
  headers: {
    'content-type': applicationJSON
  }
};

const basePostOptions: FetchOptions = {
  methodType: POST,
  headers: {
    'content-type': applicationJSON
  }
};

export const getUserByLogin = async (login: string) => {
  const url = generateUrl(UserOperations.search);
  const options = {
    ...basePostOptions,
    data: JSON.stringify({ login })
  };
  const response = await Fetch(url, options);
  return response;
};

export const getUserById = async (id: number) => {
  const url = generateUrl(`${id}`);

  const response = await Fetch(url);
  return response;
};

export const changeUserProfile = async (data: ChangeProfileFormData) => {
  const url = generateUrl(UserOperations.profile);
  const options = {
    ...basePutOptions,
    data: JSON.stringify(data)
  };
  const response = await Fetch(url, options);
  return response;
};

export const changePassword = async (data: ChangePasswordFormData) => {
  const url = generateUrl(UserOperations.password);
  const options = {
    ...basePutOptions,
    data: JSON.stringify(data)
  };
  const response = await Fetch(url, options);
  return response;
};

export const changeAvatar = async (data: FormData) => {
  const url = generateUrl(UserOperations.avatar);
  const options: FetchOptions = {
    methodType: PUT,
    data
  };

  const response = await Fetch(url, options);
  return response;
};
