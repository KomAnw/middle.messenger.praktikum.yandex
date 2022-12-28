import {appStore} from 'src/modules/Store/Store';
import Fetch from 'src/modules/Fetch/Fetch';
import {FetchOptions, METHODS} from 'src/modules/Fetch/types';
import addInstancePath from 'src/utils/generateUrl';
import {CHATS} from '../constants';
import {ContentTypes} from '../types';
import {ChatOptions} from './types';

const {POST, PUT, DELETE} = METHODS;
const {applicationJSON} = ContentTypes;
const {token, users} = ChatOptions;
const generateUrl = addInstancePath(CHATS);

const baseDeleteOptions: FetchOptions = {
  methodType: DELETE,
  headers: {
    'content-type': applicationJSON,
  },
};

const basePutOptions: FetchOptions = {
  methodType: PUT,
  headers: {
    'content-type': applicationJSON,
  },
};

const basePostOptions: FetchOptions = {
  methodType: POST,
  headers: {
    'content-type': applicationJSON,
  },
};

export const addUserToChat = async (chatId: number, usersId: number[]) => {
  const url = generateUrl(users);
  const data = {
    users: usersId,
    chatId,
  };
  const options = {
    ...basePutOptions,
    data: JSON.stringify(data),
  };

  const response = await Fetch(url, options);
  return response;
};

export const deleteUserFromChat = async (chatId: number, usersId: number[]) => {
  const url = generateUrl(users);
  const data = {
    users: usersId,
    chatId,
  };
  const options = {
    ...baseDeleteOptions,
    data: JSON.stringify(data),
  };

  const response = await Fetch(url, options);
  return response;
};

export const getChats = async () => {
  const url = generateUrl('');
  const response = await Fetch(url);
  if (response.status === 200) {
    appStore.setState('chats', response.json());
  }
  return response;
};

export const createChat = async (title: string) => {
  const url = generateUrl('');
  const options = {
    ...basePostOptions,
    data: JSON.stringify({title}),
  };
  const response = await Fetch(url, options);
  return response;
};

export const deleteChat = async (id: string) => {
  const url = generateUrl('');
  const options = {
    ...baseDeleteOptions,
    data: JSON.stringify({chatId: id}),
  };
  const response = await Fetch(url, options);
  return response;
};

export const getChatToken = async (id: number) => {
  const url = generateUrl(`${token}/${id}`);

  const response = await Fetch(url, basePostOptions);
  return response;
};
