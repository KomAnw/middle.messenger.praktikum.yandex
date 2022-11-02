import template from "bundle-text:./Button.html";
import Component from "src/modules/Component";
import * as styles from "./styles.module.scss";
import { ButtonProps } from "./types";

class ButtonComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }
}

const Button = ({ text }: ButtonProps) => {
  const componentData = {
    name: text,
    className: { ...styles },
  };

  return new ButtonComponent(template, componentData);
};

export default Button;
