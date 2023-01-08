import Component from 'src/modules/Component';
import { Props } from 'src/modules/Component/types';
import { changeAvatar } from 'src/api/User/User';
import { appStore } from 'src/modules/Store/Store';
import template from './AvatarPopup.html';
import styles from './styles.module.scss';

export class PopupComponent<P extends Props> extends Component<P> {
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
      try {
        const { ok, json } = await changeAvatar(data);
        ok && appStore.setState('user', json()) && this.removeFromDom();
        return;
      } catch (error) {
        console.log(error);
      }
    }

    this.setProps({ status: 'Нужно выбрать файл' });
  };
}

const AvatarPopup = () => {
  const componentData = {
    title: 'Загрузите файл',
    status: '',
    className: { ...styles }
  };

  return new PopupComponent(template, componentData).getNode;
};

export default AvatarPopup;
