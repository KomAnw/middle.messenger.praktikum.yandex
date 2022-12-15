import Component from "src/modules/Component";
import { Props } from "src/modules/Component/types";
import template from "bundle-text:./UserPopup.html";
import * as styles from "./styles.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { createChat } from "src/api/Chats/Chats";

class UserPopup<P extends Props> extends Component<P> {
  button: HTMLButtonElement;
  input: HTMLInputElement;
  constructor(template: string, props: P) {
    super(template, props);
    this.button = this.getNode.querySelector("button")!;
    this.input = this.getNode.querySelector("input")!;
  }

  componentDidMount(): void {
    this.button.addEventListener("click", this.onAddChatHandler);
  }

  onAddChatHandler = async () => {
    const chatName = this.input.value;
    if (chatName) {
      const { status } = await createChat(chatName);
      status === 200 && loadChats();
    }
  };
}

export const InputProps = {
  type: "text",
  name: "login",
  placeholderText: "Логин",
  validationRules: {
    required: true,
    min: 3,
  },
};

export const AddUserPopup = () => {
  const componentData = {
    title: "Добавить пользователя",
    className: { ...styles },
    nestedComponents: {
      input: Input(InputProps),
      button: Button({ text: "Добавить" }),
    },
  };

  return new UserPopup(template, componentData).getNode;
};

export const removeUserPopup = () => {
  const componentData = {
    title: "Удалить пользователя",
    className: { ...styles },
    nestedComponents: {
      input: Input(InputProps),
      button: Button({ text: "Удалить" }),
    },
  };

  return new UserPopup(template, componentData).getNode;
};
