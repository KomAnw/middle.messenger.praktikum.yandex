import { appStore } from "src/modules/Store/Store";
import Component from "src/modules/Component";
import { Props } from "src/modules/Component/types";
import template from "bundle-text:./UserPopup.html";
import * as styles from "./styles.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { addUserToChat, deleteUserFromChat } from "src/api/Chats/Chats";
import { getUserByLogin } from "src/api/User/User";

class UserPopup<P extends Props> extends Component<P> {
  button: HTMLButtonElement;
  input: HTMLInputElement;
  constructor(template: string, props: P) {
    super(template, props);
    this.button = this.getNode.querySelector("button")!;
    this.input = this.getNode.querySelector("input")!;
  }

  componentDidMount(): void {
    this.button.textContent === "Добавить"
      ? this.button.addEventListener("click", this.onAddToChatHandler)
      : this.button.addEventListener("click", this.onRemoveFromChatHandler);
  }

  onRemoveFromChatHandler = async () => {
    const userLogin = this.input.value;
    const chatId = appStore.getState("selectedChat")!.id;
    if (userLogin) {
      const userLoginResponse = await getUserByLogin(userLogin);
      userLoginResponse.ok || alert("Такой пользователь не найден :(");
      const [user] = userLoginResponse.json();
      const respose = await deleteUserFromChat(chatId, [user.id]);
      respose.ok && this.getNode.remove();
      alert(`Пользователь ${userLogin} удален из чата`);
    }
  };

  onAddToChatHandler = async () => {
    const userLogin = this.input.value;
    const chatId = appStore.getState("selectedChat")!.id;
    if (userLogin) {
      const userLoginResponse = await getUserByLogin(userLogin);
      userLoginResponse.ok || alert("Такой пользователь не найден :(");
      const [user] = userLoginResponse.json();
      const respose = await addUserToChat(chatId, [user.id]);
      respose.ok && this.getNode.remove();
      alert(`Пользователь ${userLogin} добавлен в чат`);
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

export const RemoveUserPopup = () => {
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
