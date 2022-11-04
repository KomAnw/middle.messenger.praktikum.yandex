import template from 'bundle-text:./Profile.html';
import * as styles from './styles.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import ProfileData from 'src/components/ProfileData/ProfileData';
import {FieldsProps, ProfileCommonProps} from './types';
import Button, {ButtonComponent} from '../../components/Button/Button';
import Component from 'src/modules/Component';
import {NestedComponents, onSubmitFomsHandler} from 'src/utils';

const FiledsList = (fieldsProps: FieldsProps[], disabled?: 'disabled') =>
  fieldsProps.reduce(
      (accumulator, props) => ({
        ...accumulator,
        [props.inputName]: ProfileData({disabled, ...props}),
      }),
      {}
  );
class ProfileComponent extends Component {
  nestedComponents: NestedComponents;
  button: ButtonComponent;

  constructor(template: string, props: any) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents;
    this.button = this.nestedComponents.Button;
  }

  componentDidMount(): void {
    !this.getProps.disabled &&
      onSubmitFomsHandler(this.button.getNode, this.nestedComponents);
  }
}

const Profile = ({
  name = 'Имя',
  avatarProps,
  fieldsProps,
  disabled,
}: ProfileCommonProps) => {
  const ButtonComponent = !disabled && Button({text: 'Сохранить'});
  const componentData = {
    className: {...styles},
    name,
    disabled,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: ButtonComponent || document.createDocumentFragment(),
      ...FiledsList(fieldsProps, disabled),
    },
  };

  return new ProfileComponent(template, componentData).getNode;
};

export default Profile;
