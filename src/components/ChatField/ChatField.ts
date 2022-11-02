import template from "bundle-text:./ChatField.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component1/Component";
import { ChatFieldProps } from "./types";

const ChatField = ({
  personName,
  personMessage,
  time,
  unreadMessages,
}: ChatFieldProps) => {
  const {
    container,
    left,
    avatar,
    person,
    name,
    message,
    right,
    timer,
    unread,
    divider,
    wrapper,
  } = styles;
  const componentData = {
    className: {
      container,
      left,
      avatar,
      person,
      name,
      message,
      right,
      timer,
      unread,
      divider,
      wrapper,
    },
    personName,
    personMessage,
    time,
    unreadMessages: unreadMessages,
  };

  return new Component({ template, componentData }).createComponent();
};

export default ChatField;
