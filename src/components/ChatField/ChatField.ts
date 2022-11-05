import template from 'bundle-text:./ChatField.html';
import Component from 'src/modules/Component';
import {Props} from 'src/modules/Component/types';
import * as styles from './styles.module.scss';
import {ChatFieldProps} from './types';

class ChatFieldComponent<P extends Props> extends Component<Props> {
  constructor(template: string, props: P) {
    super(template, props);
  }
}

const ChatField = ({
  personName,
  personMessage,
  time,
  unreadMessages,
}: ChatFieldProps) => {
  const componentData = {
    className: {...styles},
    personName,
    personMessage,
    time,
    unreadMessages: unreadMessages,
  };

  return new ChatFieldComponent(template, componentData);
};

export default ChatField;
