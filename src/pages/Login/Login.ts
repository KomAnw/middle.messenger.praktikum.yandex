import template from "bundle-text:./Login.html";
import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import archive from "src/archive.json";
import * as styles from "./styles.module.scss";
import Link from "src/components/Link/Link";
import { login, button, link, password } from "./constants";
import Component from "src/modules/Component";

class LoginComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }

  render() {
    const nestedComponents = {
      login: Input(login).getNode,
      password: Input(password).getNode,
      button: Button(button).getNode,
      link: Link(link).getNode,
    };
    this.replaceNodesToComponents(nestedComponents);
  }
}

const Login = () => {
  const componentData = {
    title: archive.forms.login.title,
    className: { ...styles },
  };

  return new LoginComponent(template, componentData).getNode;
};

export default Login;
