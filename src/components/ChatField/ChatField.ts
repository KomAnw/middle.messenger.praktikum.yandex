import template from 'bundle-text:./ChatField.html';
import Component from 'src/modules/Component';
import * as styles from './styles.module.scss';
import {ChatFieldProps} from './types';

class ChatFieldComponent extends Component {
  constructor(template: string, props: any) {
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
