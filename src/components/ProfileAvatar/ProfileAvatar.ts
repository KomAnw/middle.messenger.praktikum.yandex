import template from 'bundle-text:./ProfileAvatar.html';
import * as styles from './styles.module.scss';
import {ProfileAvatarProps} from './types';
import avatar from '../../../static/assets/profile/avatar.jpg';
import Component from 'src/modules/Component';
import {Props} from 'src/modules/Component/types';

export class ProfileAvatarComponent<P extends Props> extends Component<P> {
  constructor(template: string, props: P) {
    super(template, props);
  }

  setSrc(component: HTMLImageElement) {
    const img = component.querySelector('img')!;
    const {src} = img.dataset;
    img.setAttribute('src', `${src}`);
    return component;
  }

  render() {
    this.setSrc(this.getNode as HTMLImageElement);
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
