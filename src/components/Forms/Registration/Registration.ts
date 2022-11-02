import template from "bundle-text:./Registration.html";
import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import archive from "src/archive.json";
import * as styles from "./styles.module.scss";
import Link from "src/components/Link/Link";
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
} from "./constants";
import Component from "src/modules/component1/Component";

const Registration = () => {
  const { container, title, form, buttonsContainer } = styles;
  const componentData = {
    title: archive.forms.registration.title,
    className: { container, title, form, buttonsContainer },
  };
  const nestedComponents = {
    login: Input(login),
    email: Input(email),
    firstName: Input(firstName),
    secondName: Input(secondName),
    phone: Input(phone),
    password: Input(password),
    secondPassword: Input(secondPassword),
    button: Button(button),
    link: Link(link),
  };

  return new Component({
    template,
    componentData,
    nestedComponents,
  }).createComponent();
};

export default Registration;
