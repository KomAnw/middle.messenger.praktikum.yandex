import App from 'src/app/App';
import {Props} from 'src/modules/Component/types';
import template from 'bundle-text:./ChatPanel.html';
import * as styles from './styles.module.scss';
import Component from 'src/modules/Component';
import {AddUserPopup, RemoveUserPopup} from '../UserPopup/UserPopup';

export class ChatPanelComponent<P extends Props> extends Component<P> {
  renderPopup: (node: HTMLElement) => void;
  constructor(template: string, props: P) {
    super(template, props);
    this.renderPopup = App.renderPopup;
    this.addListners();
  }

  addListners() {
    this.getNode.querySelector('#add')?.addEventListener('click', () => {
      this.renderPopup(AddUserPopup());
    });

    this.getNode.querySelector('#remove')?.addEventListener('click', () => {
      this.renderPopup(RemoveUserPopup());
    });
  }
}

const ChatPanel = () => {
  const componentData = {
    className: {...styles},
  };

  return new ChatPanelComponent(template, componentData);
};

export default ChatPanel;
