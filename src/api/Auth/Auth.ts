import Fetch from 'src/modules/Fetch/Fetch';
import addInstancePath from 'src/utils/generateUrl';
import {AUTH} from '../constants';
import {AuthOperations} from './types';
import {FetchOptions, METHODS} from 'src/modules/Fetch/types';
import {ContentTypes} from '../types';
import {RegistrationFormData} from 'src/pages/Registration/types';
import {LoginFormData} from 'src/pages/Login/types';

const {POST} = METHODS;
const {applicationJSON} = ContentTypes;
const generateUrl = addInstancePath(AUTH);

const basePostOptions: FetchOptions = {
  methodType: POST,
  headers: {
    'content-type': applicationJSON,
  },
};

export const signup = async (data: RegistrationFormData) => {
  const url = generateUrl(AuthOperations.signup);
  const options: FetchOptions = {
    ...basePostOptions,
    data: JSON.stringify(data),
  };

  const response = await Fetch(url, options);
  return response;
};

export const signin = async (data: LoginFormData) => {
  const url = generateUrl(AuthOperations.signin);
  const options: FetchOptions = {
    ...basePostOptions,
    data: JSON.stringify(data),
  };

  const response = await Fetch(url, options);
  return response;
};

export const getUserInfo = async () => {
  const url = generateUrl(AuthOperations.user);

  const response = await Fetch(url);
  return response;
};

export const logout = async () => {
  const url = generateUrl(AuthOperations.logout);

  const response = await Fetch(url, basePostOptions);
  return response;
};
