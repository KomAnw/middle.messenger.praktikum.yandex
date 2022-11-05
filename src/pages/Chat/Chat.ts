import {Props} from 'src/modules/Component/types';
import template from 'bundle-text:./Chat.html';
import * as styles from './styles.module.scss';
import ChatField from '../../components/ChatField/ChatField';
import {ChatCard, ChatProps} from './types';
import Component from 'src/modules/Component';

const getChats = (chatsData: ChatCard[]) => {
  const container = document.createDocumentFragment();
  const result = chatsData.map(
      ({personName, personMessage, time, unreadMessages}) =>
        ChatField({personName, personMessage, time, unreadMessages}).getNode
  );
  result.forEach((element) => container.appendChild(element));
  return container;
};
class ChatComponent<P extends Props> extends Component<P> {
  constructor(template: string, props: P) {
    super(template, props);
  }
}

const Chat = ({chatsData}: ChatProps) => {
  const componentData = {
    className: {...styles},
    chatsData,
    nestedComponents: {
      Chats: getChats(chatsData),
    },
  };

  return new ChatComponent(template, componentData as Props).getNode;
};

export default Chat;
