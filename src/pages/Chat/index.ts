import {ChatData} from 'src/pages/Chat/types';
import {appStore} from './../../modules/Store/Store';
import {getChats} from 'src/api/Chats/Chats';
import Chat from './Chat';

const ChatElement = async () => {
  const chats = appStore.getState('chats');
  if (chats) {
    return Chat({chatsData: chats as ChatData[]});
  }

  const {ok, json} = await getChats();
  ok && appStore.setState('chats', json());
  return Chat({chatsData: json()});
};

export default ChatElement;
