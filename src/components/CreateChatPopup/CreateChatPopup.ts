import Component from 'src/modules/Component';
import { Props } from 'src/modules/Component/types';
import { createChat, getChats } from 'src/api/Chats/Chats';
import template from './CreateChatPopup.html';
import styles from './styles.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ChatPopup<P extends Props> extends Component<P> {
  button: HTMLButtonElement;

  input: HTMLInputElement;

  constructor(template: string, props: P) {
    super(template, props);
    this.button = this.getNode.querySelector('button')!;
    this.input = this.getNode.querySelector('input')!;
  }

  componentDidMount(): void {
    this.button.addEventListener('click', this.onAddChatHandler);
  }

  onAddChatHandler = async () => {
    const chatName = this.input.value;
    if (chatName) {
      try {
        const { status } = await createChat(chatName);
        status === 200 && getChats();
        this.getNode.remove();
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export const InputProps = {
  type: 'text',
  name: 'name',
  placeholderText: 'Название чата',
  validationRules: {
    required: true,
    min: 3
  }
};

export const CreateChatPopup = () => {
  const componentData = {
    title: 'Создать чат',
    className: { ...styles },
    nestedComponents: {
      input: Input(InputProps),
      button: Button({ text: 'Добавить' })
    }
  };

  return new ChatPopup(template, componentData).getNode;
};
