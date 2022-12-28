import template from 'bundle-text:./ProfileAvatar.html';
import * as styles from './styles.module.scss';
import {ProfileAvatarProps} from './types';
import avatar from '../../../static/assets/profile/avatar.jpg';
import Component from 'src/modules/Component';
import {Props} from 'src/modules/Component/types';
import AvatarPopup from '../AvatarPopup/AvatarPopup';
import App from 'src/app/App';

export class ProfileAvatarComponent<P extends Props> extends Component<P> {
  popupRoot = document.getElementById('popup')!;

  constructor(template: string, props: P) {
    super(template, props);
  }

  componentDidMount(): void {
    const {renderPopup} = App;
    this.getNode.addEventListener('click', () => renderPopup(AvatarPopup()));

    document.addEventListener('user', ((event: CustomEvent) => {
      const {detail} = event;
      this.setProps({link: detail.avatar});
    }) as EventListener);
  }

  componentDidUpdate() {
    this.setSrc();
  }

  setSrc() {
    const img = this.getNode.querySelector('img')!;
    const {link} = this.getProps;
    img.setAttribute(
        'src',
        `https://ya-praktikum.tech/api/v2/resources${link}`
    );
  }

  render() {
    this.setSrc();
  }
}

const ProfileAvatar = ({
  link = avatar,
  alt = 'My avatar',
}: ProfileAvatarProps) => {
  const componentData = {
    link,
    alt,
    className: {...styles},
  };

  return new ProfileAvatarComponent(template, componentData);
};

export default ProfileAvatar;
