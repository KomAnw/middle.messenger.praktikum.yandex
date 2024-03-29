import { NestedComponents, Props } from 'src/modules/Component/types';
import ProfileData from 'src/components/ProfileData/ProfileData';
import Component from 'src/modules/Component';
import { onSubmitFomsHandler } from 'src/utils/onSubmitFomsHandler';
import { logout } from 'src/api/Auth/Auth';
import { changeUserProfile } from 'src/api/User/User';
import { appStore } from 'src/modules/Store/Store';
import Button from '../../components/Button/Button';
import { ChangeProfileFormData, FieldsProps, ProfileCommonProps } from './types';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import styles from './styles.module.scss';
import template from './Profile.html';
import { goCommonProfile } from '../../modules/Router/routes';

const FiledsList = (fieldsProps: FieldsProps[], disabled?: 'disabled') =>
  fieldsProps.reduce(
    (accumulator, props) => ({
      ...accumulator,
      [props.inputName]: ProfileData({ disabled, ...props })
    }),
    {}
  );

class ProfileComponent<P extends Props> extends Component<P> {
  nestedComponents: NestedComponents;

  form: HTMLFormElement;

  exitButton = this.getNode.querySelector('.exit');

  constructor(template: string, props: P) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents!;
    this.form = this.getNode.querySelector('form')!;
  }

  componentDidMount(): void {
    !this.getProps.disabled && onSubmitFomsHandler(this.form, this.nestedComponents, this.onSubmit);
    this.extitHandler();
  }

  onSubmit = async (formData: ChangeProfileFormData) => {
    try {
      const { ok, json } = await changeUserProfile(formData);
      (ok && appStore.setState('user', json()) && goCommonProfile()) || alert(json().reason);
    } catch (error) {
      console.log(error);
    }
  };

  extitHandler() {
    this.exitButton?.addEventListener('click', logout);
  }
}

const Profile = ({ name = 'Имя', avatarProps, fieldsProps, disabled }: ProfileCommonProps) => {
  const ButtonComponent = !disabled && Button({ text: 'Сохранить' });
  const componentData = {
    className: { ...styles },
    name,
    disabled,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: ButtonComponent || document.createDocumentFragment(),
      ...FiledsList(fieldsProps, disabled)
    }
  };

  return new ProfileComponent(template, componentData).getNode;
};

export default Profile;
