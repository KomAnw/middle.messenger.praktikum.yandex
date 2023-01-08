import { appStore } from 'src/modules/Store/Store';
import { Props } from 'src/modules/Component/types';
import Component from 'src/modules/Component';
import { Moment } from 'src/modules/Moment/Moment';
import { getUserById } from 'src/api/User/User';
import template from './Message.html';
import styles from './styles.module.scss';
import { MessageProps } from './types';

export class MessageComponent<P extends Props> extends Component<P> {
  name: string | undefined;

  constructor(template: string, props: P) {
    super(template, props);
    this.name = props.name ? props.name : undefined;
    this.name
      ? (this.getNode.style.alignSelf = 'flex-start')
      : (this.getNode.style.alignSelf = 'flex-end');
  }

  setStyle() {}
}

const Message = async ({ user_id, text, time }: MessageProps) => {
  const { time: messageTime, date, month, year } = Moment(time);
  const userId = appStore.getState('user')?.id;
  try {
    const userData = user_id !== userId && (await getUserById(user_id)).json();
    const userName = userData.display_name || userData.login;

    const componentData = {
      className: { ...styles },
      name: user_id === userId ? undefined : userName,
      text,
      time: messageTime,
      dateLabel: `${month} ${year} ${date} ${messageTime}`
    };

    return new MessageComponent(template, componentData);
  } catch (error) {
    console.log(error);
  }
};

export default Message;
