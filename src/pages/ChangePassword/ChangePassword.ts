import ProfileData from 'src/components/ProfileData/ProfileData';
import Component from 'src/modules/Component';
import { onSubmitFomsHandler } from 'src/utils/onSubmitFomsHandler';
import { NestedComponents, Props } from 'src/modules/Component/types';
import { changePassword } from 'src/api/User/User';
import { goCommonProfile } from 'src/modules/Router/routes';
import template from './ChangePassword.html';
import styles from './styles.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import Button from '../../components/Button/Button';
import { FieldsProps, ProfileCommonProps } from '../Profile/types';

import { ChangePasswordFormData } from './types';

const FiledsList = (fieldsProps: FieldsProps[], disabled?: 'disabled') =>
  fieldsProps.reduce(
    (accumulator, props) => ({
      ...accumulator,
      [props.inputName]: ProfileData({ disabled, ...props })
    }),
    {}
  );

class ChangePasswordComponent<P extends Props> extends Component<P> {
  nestedComponents: NestedComponents;

  form: HTMLFormElement;

  constructor(template: string, props: P) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents as NestedComponents;
    this.form = this.getNode.querySelector('form')!;
  }

  componentDidMount(): void {
    !this.getProps.disabled && onSubmitFomsHandler(this.form, this.nestedComponents, this.onSubmit);
  }

  onSubmit = async (formData: ChangePasswordFormData) => {
    try {
      const { ok } = await changePassword(formData);
      ok && goCommonProfile();
    } catch (error) {
      alert(error);
    }
  };
}

const ChangePassword = ({ name = 'Имя', avatarProps, fieldsProps }: ProfileCommonProps) => {
  const componentData = {
    className: { ...styles },
    name,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: Button({ text: 'Сохранить' }),
      ...FiledsList(fieldsProps)
    }
  };

  return new ChangePasswordComponent(template, componentData).getNode;
};

export default ChangePassword;
