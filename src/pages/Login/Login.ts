import template from "bundle-text:./Login.html";
import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import archive from "src/archive.json";
import * as styles from "./styles.module.scss";
import Link from "src/components/Link/Link";
import { login, button, link, password } from "./constants";
import Component from "src/modules/Component";
import { onSubmitFomsHandler } from "src/utils/onSubmitFomsHandler";
import { NestedComponents, Props } from "src/modules/Component/types";
import { getUserInfo, signin } from "src/api/Auth/Auth";
import { LoginFormData } from "./types";
import { goChat } from "src/modules/Router/routes";
import { appStore } from "src/modules/Store/Store";

class LoginComponent<P extends Props> extends Component<P> {
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

  triggerFetch = async (formData: LoginFormData) => {
    try {
      const { ok: signinOK, json: signinJSON } = await signin(formData);
      if (!signinOK) {
        alert(signinJSON().reason);
        return;
      }

      const { ok: getUserInfoOK, json: getUserInfoJSON } = await getUserInfo();
      getUserInfoOK ? appStore.setState("user", getUserInfoJSON()) : null;
      goChat();
    } catch (error) {
      console.log(error);
    }
  };
}

const Login = () => {
  const componentData = {
    title: archive.forms.login.title,
    className: { ...styles },
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
