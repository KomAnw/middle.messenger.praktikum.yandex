import { ChatData } from 'src/pages/Chat/types';
import { getChats } from 'src/api/Chats/Chats';
import { appStore } from '../../modules/Store/Store';
import Chat from './Chat';
import ClientError from '../404';

const ChatElement = async () => {
  const chats = appStore.getState('chats');
  if (chats) {
    return Chat({ chatsData: chats as ChatData[] });
  }

  try {
    const { ok, json } = await getChats();
    ok && appStore.setState('chats', json());
    return Chat({ chatsData: json() });
  } catch (error) {
    console.log(error);
  }

  return ClientError();
};

export default ChatElement;
