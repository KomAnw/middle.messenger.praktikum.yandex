import { ClassName, NestedComponents } from "./../../modules/Component/types";
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
import { onSubmitFomsHandler } from "src/utils/onSubmitFomsHandler";
import { Props } from "src/modules/Component/types";
import { RegistrationFormData } from "./types";
import { getUserInfo, signup } from "src/api/Auth/Auth";
import { checkResponseStatus } from "src/utils/checkResponseStatus";
import { createSlice } from "src/modules/Store/slice";
import appStoreProxy from "src/modules/Store/Store";

class RegistrationComponent<P extends Props> extends Component<P> {
  nestedComponents: NestedComponents;
  form: HTMLFormElement;

  constructor(template: string, props: P) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents as NestedComponents;
    this.form = this.getNode.querySelector("form")!;
  }

  componentDidMount(): void {
    onSubmitFomsHandler(this.form, this.nestedComponents, this.triggerFetch);
  }

  triggerFetch = async (formData: RegistrationFormData) => {
    const response = await signup(formData);
    if (response.status === 200) {
      const response = await getUserInfo();
      response.status === 200 && createSlice("user", response.json());
      return;
    }

    alert(response.json().reason);
  };
}

const Registration = () => {
  const componentData = {
    title: archive.forms.registration.title,
    className: { ...styles } as ClassName,
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

  return new RegistrationComponent(template, componentData as unknown as Props)
    .getNode;
};

export default Registration;
