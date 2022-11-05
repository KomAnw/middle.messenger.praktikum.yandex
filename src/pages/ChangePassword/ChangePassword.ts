import template from 'bundle-text:./ChangePassword.html';
import * as styles from './styles.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import ProfileData from 'src/components/ProfileData/ProfileData';
import Button from '../../components/Button/Button';
import {FieldsProps} from '../Profile/types';
import {ProfileCommonProps} from '../Profile/types';
import Component from 'src/modules/Component';
import {onSubmitFomsHandler} from 'src/utils';
import {NestedComponents, Props} from 'src/modules/Component/types';

const FiledsList = (fieldsProps: FieldsProps[], disabled?: 'disabled') =>
  fieldsProps.reduce(
      (accumulator, props) => ({
        ...accumulator,
        [props.inputName]: ProfileData({disabled, ...props}),
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
    !this.getProps.disabled &&
      onSubmitFomsHandler(this.form, this.nestedComponents);
  }
}

const ChangePassword = ({
  name = 'Имя',
  avatarProps,
  fieldsProps,
}: ProfileCommonProps) => {
  const componentData = {
    className: {...styles},
    name,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: Button({text: 'Сохранить'}),
      ...FiledsList(fieldsProps),
    },
  };

  return new ChangePasswordComponent(template, componentData as Props).getNode;
};

export default ChangePassword;
