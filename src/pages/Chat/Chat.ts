import { appStore } from "src/modules/Store/Store";
import { Props } from "src/modules/Component/types";
import template from "bundle-text:./Chat.html";
import * as styles from "./styles.module.scss";
import ChatField from "../../components/ChatField/ChatField";
import { ChatData, ChatProps } from "./types";
import Component from "src/modules/Component";
import { ICustomEvent } from "src/modules/Store/types";
import App from "src/app/App";
import { CreateChatPopup } from "src/components/CreateChatPopup/CreateChatPopup";

const getChats = (chatsData: ChatData[]) => {
  const container = document.createDocumentFragment();
  const result = chatsData.map((chatData) => ChatField(chatData).getNode);
  result.forEach((element) => container.appendChild(element));
  return container;
};

class ChatComponent<P extends Props> extends Component<P> {
  selected: null | ChatData = null;

  constructor(template: string, props: P) {
    super(template, props);
  }

  componentDidMount() {
    const { renderPopup } = App;
    const addChatButton = this.getNode.querySelector(".addChat")!;

    addChatButton.addEventListener("click", () =>
      renderPopup(CreateChatPopup())
    );
    this.subscribe();
  }

  onChatSelect = (selectedChat: any) => {
    const chats = appStore.getState("chats");
    const selected = chats?.find((el) => el.id == selectedChat.id);
    if (selected) {
      this.selected = selected;
    }
    console.log(selected);
  };

  subscribe() {
    appStore.subscribe("selectedChat", (event: ICustomEvent) =>
      this.onChatSelect(event.detail)
    );
    appStore.subscribe("chats", (event: ICustomEvent) => {
      const nestedComponents = { Chats: getChats(event.detail) };
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
    },
  };

  return new ChatComponent(template, componentData).getNode;
};

export default Chat;
