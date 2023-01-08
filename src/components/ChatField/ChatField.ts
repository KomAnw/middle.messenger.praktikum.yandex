import { appStore } from 'src/modules/Store/Store';
import Component from 'src/modules/Component';
import { Props } from 'src/modules/Component/types';
import { deleteChat, getChats, getChatToken } from 'src/api/Chats/Chats';
import { ChatData } from '../../pages/Chat/types';
import template from './ChatField.html';
import styles from './styles.module.scss';

class ChatFieldComponent<P extends Props> extends Component<Props> {
  componentDidMount() {
    this.getNode.addEventListener('click', this.onClick);
  }

  onClick = async (event: Event) => {
    const target = event.target as HTMLElement;
    const curTarget = event.currentTarget as HTMLElement;
    const id = (curTarget.firstChild as HTMLElement)?.id;
    try {
      if (target.classList.contains('remove')) {
        const isRemove = confirm('Вы действительно хотите удалить чат?');
        if (isRemove) {
          const { ok } = await deleteChat(id);
          ok && (await getChats());
          return;
        }
      }

      const { ok, json } = await getChatToken(Number(id));
      ok && appStore.setState('selectedChat', { id, token: json().token });
    } catch (error) {
      console.log(error);
    }
  };
}

const ChatField = (props: ChatData) => {
  const componentData = {
    className: { ...styles },
    ...props
  };

  return new ChatFieldComponent(template, componentData);
};

export default ChatField;
