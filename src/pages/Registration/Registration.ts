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
import Component from "src/modules/Component";

class RegistrationComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }

  render() {
    const nestedComponents = {
      login: Input(login).getNode,
      email: Input(email).getNode,
      firstName: Input(firstName).getNode,
      secondName: Input(secondName).getNode,
      phone: Input(phone).getNode,
      password: Input(password).getNode,
      secondPassword: Input(secondPassword).getNode,
      button: Button(button).getNode,
      link: Link(link).getNode,
    };
    this.replaceNodesToComponents(nestedComponents);
  }
}

const Registration = () => {
  const componentData = {
    title: archive.forms.registration.title,
    className: { ...styles },
  };

  return new RegistrationComponent(template, componentData).getNode;
};

export default Registration;
