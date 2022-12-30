import { appStore } from "src/modules/Store/Store";
import { ChatData } from "./../../pages/Chat/types";
import template from "bundle-text:./ChatField.html";
import Component from "src/modules/Component";
import { Props } from "src/modules/Component/types";
import * as styles from "./styles.module.scss";
import { deleteChat, getChats, getChatToken } from "src/api/Chats/Chats";

class ChatFieldComponent<P extends Props> extends Component<Props> {
  constructor(template: string, props: P) {
    super(template, props);
  }

  componentDidMount() {
    this.getNode.addEventListener("click", this.onClick);
  }

  onClick = async (event: Event) => {
    const target = event.target as HTMLElement;
    const curTarget = event.currentTarget as HTMLElement;
    const id = (curTarget.firstChild as HTMLElement)?.id;
    try {
      if (target.classList.contains("remove")) {
        let isRemove = confirm("Вы действительно хотите удалить чат?");
        if (isRemove) {
          const { ok } = await deleteChat(id);
          ok && (await getChats());
          return;
        }
      }

      const { ok, json } = await getChatToken(Number(id));
      ok && appStore.setState("selectedChat", { id, token: json().token });
    } catch (error) {
      console.log(error);
    }
  };
}

const ChatField = (props: ChatData) => {
  const componentData = {
    className: { ...styles },
    ...props,
  };

  return new ChatFieldComponent(template, componentData);
};

export default ChatField;
