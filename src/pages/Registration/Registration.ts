import template from 'bundle-text:./Registration.html';
import Input from 'src/components/Input/Input';
import Button, {ButtonComponent} from 'src/components/Button/Button';
import archive from 'src/archive.json';
import * as styles from './styles.module.scss';
import Link from 'src/components/Link/Link';
import {
  button,
  email,
  firstName,
  link,
  login,
  password,
  phone,
  secondName,
  secondPassword,
} from './constants';
import Component from 'src/modules/Component';
import {NestedComponents, onSubmitFomsHandler} from 'src/utils';

class RegistrationComponent extends Component {
  nestedComponents: NestedComponents;
  button: ButtonComponent;

  constructor(template: string, props: any) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents;
    this.button = this.nestedComponents.button;
  }

  componentDidMount(): void {
    onSubmitFomsHandler(this.button.getNode, this.nestedComponents);
  }
}

const Registration = () => {
  const componentData = {
    title: archive.forms.registration.title,
    className: {...styles},
    nestedComponents: {
      login: Input(login),
      email: Input(email),
      firstName: Input(firstName),
      secondName: Input(secondName),
      phone: Input(phone),
      password: Input(password),
      secondPassword: Input(secondPassword),
      button: Button(button),
      link: Link(link),
    },
  };

  return new RegistrationComponent(template, componentData).getNode;
};

export default Registration;
