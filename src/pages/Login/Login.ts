import template from 'bundle-text:./Login.html';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';
import archive from 'src/archive.json';
import * as styles from './styles.module.scss';
import Link from 'src/components/Link/Link';
import {login, button, link, password} from './constants';
import Component from 'src/modules/Component';
import {onSubmitFomsHandler} from 'src/utils';
import {NestedComponents, Props} from 'src/modules/Component/types';

class LoginComponent<P extends Props> extends Component<P> {
  nestedComponents: NestedComponents;
  form: HTMLFormElement;

  constructor(template: string, props: P) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents as NestedComponents;
    this.form = this.getNode.querySelector('form')!;
  }

  componentDidMount(): void {
    onSubmitFomsHandler(this.form, this.nestedComponents);
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

  return new LoginComponent(template, componentData as Props).getNode;
};

export default Login;
