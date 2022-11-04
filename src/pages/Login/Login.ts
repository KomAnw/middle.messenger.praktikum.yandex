import {ButtonComponent} from './../../components/Button/Button';
import template from 'bundle-text:./Login.html';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';
import archive from 'src/archive.json';
import * as styles from './styles.module.scss';
import Link from 'src/components/Link/Link';
import {login, button, link, password} from './constants';
import Component from 'src/modules/Component';
import {NestedComponents} from './types';
import {onSubmitFomsHandler} from 'src/utils';

class LoginComponent extends Component {
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

const Login = () => {
  const componentData = {
    title: archive.forms.login.title,
    className: {...styles},
    nestedComponents: {
      login: Input(login),
      password: Input(password),
      button: Button(button),
      link: Link(link),
    },
  };

  return new LoginComponent(template, componentData).getNode;
};

export default Login;
