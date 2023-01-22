import { appStore } from 'src/modules/Store/Store';
import { Props } from 'src/modules/Component/types';
import Component from 'src/modules/Component';
import App from 'src/app/App';
import { CreateChatPopup } from 'src/components/CreateChatPopup/CreateChatPopup';
import MainChatWindow from 'src/components/MainChatWindow/MainChatWindow';
import template from './Chat.html';
import styles from './styles.module.scss';
import ChatField from '../../components/ChatField/ChatField';
import { ChatData, ChatProps } from './types';

const getChats = (chatsData: ChatData[]) => {
  // TODO два фрагмента = друг другу
  const container = document.createDocumentFragment();
  const result = chatsData.map((chatData) => ChatField(chatData).getNode);
  result.forEach((element) => container.appendChild(element));
  return container;
};

class ChatComponent<P extends Props> extends Component<P> {
  renderPopup: (node: HTMLElement) => void;

  constructor(template: string, props: P) {
    super(template, props);
    this.renderPopup = App.renderPopup;
  }

  componentDidMount() {
    this.addEventListeners();
    this.subscribe();
  }

  componentDidUpdate() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.getNode
      .querySelector('.addChat')
      ?.addEventListener('click', () => this.renderPopup(CreateChatPopup()));
  }

  subscribe() {
    appStore.subscribe('chats', (event) => {
      const nestedComponents = {
        Chats: getChats(event.detail),
        MainChatWindow: MainChatWindow()
      };
      this.setProps({ nestedComponents });
    });
  }
}

const Chat = ({ chatsData }: ChatProps) => {
  const componentData = {
    className: { ...styles },
    chatsData,
    nestedComponents: {
      Chats: getChats(chatsData),
      MainChatWindow: MainChatWindow()
    }
  };

  return new ChatComponent(template, componentData).getNode;
};

export default Chat;
