import { appStore } from "src/modules/Store/Store";
import { Props } from "src/modules/Component/types";
import template from "bundle-text:./MainChatWindow.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/Component";
import {
  ICustomEvent,
  Message as MessageType,
  SelectedChat,
} from "src/modules/Store/types";
import { WSS } from "src/modules/Fetch/ws";
import Message from "../Message/Message";
import ChatPanel from "../ChatPanel/ChatPanel";

export class MainChatWindowComponent<P extends Props> extends Component<P> {
  send?: (content: string) => void;
  socket: null | WebSocket;

  constructor(template: string, props: P) {
    super(template, props);
    this.send = undefined;
    this.socket = null;
  }

  componentDidMount() {
    this.subscribe();
  }

  componentDidUpdate() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.socket?.close();
  }

  onChatSelect = async (event: ICustomEvent) => {
    const { id: chatId, token } = event.detail as SelectedChat;
    const userId = appStore.getState("user")!.id;
    const { get, send, socket } = await WSS({ userId, chatId, token });

    this.send = send;
    this.socket = socket;
    this.onChatsLoaded(socket);
    get(0);
  };

  async pushMessage({ user_id, time, content }: MessageType) {
    const instance = await Message({
      user_id,
      text: content,
      time: time,
    });
    this.getNode.querySelector(".chatMessages")?.prepend(instance.getNode);
  }

  async renderMessages(messages: MessageType[]) {
    const fragment = document.createDocumentFragment();

    await messages.reduce(async (_, { user_id, time, content }) => {
      const instance = await Message({
        user_id,
        text: content,
        time: time,
      });
      fragment.append(instance.getNode);
    }, Promise.resolve());

    const nestedComponents = {
      messages: fragment,
      chatPanel: ChatPanel(),
    };

    this.setProps({ nestedComponents });
  }

  onChatsLoaded(socket: WebSocket) {
    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);
      if (response.type === "pong") {
        return;
      }

      Array.isArray(response)
        ? this.renderMessages(response)
        : this.pushMessage(response);
    });
  }

  subscribe() {
    const button = this.getNode.querySelector(
      ".sendButton"
    )! as HTMLButtonElement;
    const input = this.getNode.querySelector(".input")! as HTMLInputElement;

    appStore.subscribe("selectedChat", this.onChatSelect);
    button.addEventListener("click", () => {
      this.send && input.value && this.send(input.value);
      input.value = "";
    });
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        button.click();
      }
    });
  }
}

const MainChatWindow = () => {
  const componentData = {
    className: { ...styles },
  };

  return new MainChatWindowComponent(template, componentData);
};

export default MainChatWindow;
