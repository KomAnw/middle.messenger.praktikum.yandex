import template from "bundle-text:./Login.html";
import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import archive from "src/archive.json";
import * as styles from "./styles.module.scss";
import Link from "src/components/Link/Link";
import { login, button, link, password } from "./constants";
import Component from "src/modules/component/Component";

const Login = () => {
  const { container, title, form, buttonsContainer } = styles;
  const componentData = {
    title: archive.forms.login.title,
    className: { container, title, form, buttonsContainer },
  };
  const nestedComponents = {
    login: Input(login),
    password: Input(password),
    button: Button(button),
    link: Link(link),
  };

  return new Component({
    template,
    componentData,
    nestedComponents,
  }).createComponent();
};

export default Login;
