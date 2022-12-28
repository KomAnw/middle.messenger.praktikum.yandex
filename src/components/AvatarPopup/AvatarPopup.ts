import Component from 'src/modules/Component';
import {Props} from 'src/modules/Component/types';
import template from 'bundle-text:./AvatarPopup.html';
import * as styles from './styles.module.scss';
import {changeAvatar} from 'src/api/User/User';
import {appStore} from 'src/modules/Store/Store';

export class PopupComponent<P extends Props> extends Component<P> {
  constructor(template: string, props: P) {
    super(template, props);
  }

  removeFromDom = () => {
    this.getNode.remove();
  };

  componentDidMount(): void {
    const close = this.getNode.querySelector('.close_button');
    const form = this.getNode.querySelector('form');
    close?.addEventListener('click', this.removeFromDom);
    form?.addEventListener('submit', this.onSubmitHandler);
  }

  onSubmitHandler = async (event: SubmitEvent) => {
    const input = this.getNode.querySelector('input')!;
    event.preventDefault();
    const data = new FormData();

    if (input.files?.length) {
      const [file] = input.files;
      data.append('avatar', file);

      const {ok, json} = await changeAvatar(data);
      ok && appStore.setState('user', json()) && this.removeFromDom();
      return;
    }

    this.setProps({status: 'Нужно выбрать файл'});
  };
}

const AvatarPopup = () => {
  const componentData = {
    title: 'Загрузите файл',
    status: '',
    className: {...styles},
  };

  return new PopupComponent(template, componentData).getNode;
};

export default AvatarPopup;
