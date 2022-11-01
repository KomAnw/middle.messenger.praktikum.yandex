import template from "bundle-text:./Chat.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component/Component";
import ChatField from "../ChatField/ChatField";
import { ChatCard, ChatProps } from "./types";

const getChats = (chatsData: ChatCard[]) => {
  const container = document.createDocumentFragment();
  const result = chatsData.map(({ personName, personMessage, time, unreadMessages }) =>
    ChatField({ personName, personMessage, time, unreadMessages })
  );
  result.forEach((element) => container.appendChild(element));
  return container;
};

const Chat = ({ chatsData }: ChatProps) => {
  const { container, left, topBar, profileLink, serchContainer, serchField, chats, right, text } =
    styles;
  const componentData = {
    className: {
      container,
      left,
      topBar,
      profileLink,
      serchContainer,
      serchField,
      chats,
      right,
      text,
    },
  };

  const nestedComponents = {
    Chats: getChats(chatsData),
  };

  return new Component({ template, componentData, nestedComponents }).createComponent();
};

export default Chat;
