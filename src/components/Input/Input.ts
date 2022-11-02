import template from "bundle-text:./Input.html";
import * as styles from "./styles.module.scss";
import { InputProps } from "./types";
import Component from "src/modules/Component/Component";

class InputComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }

  inputAnimationHandler() {
    const element = this.getNode?.querySelector(`input`);
    element?.addEventListener("keyup", (event: Event) => {
      const target = event.target as HTMLInputElement;
      element.setAttribute("value", target.value);
    });

    // after build parcel remove imput value if it empty
    element?.setAttribute("value", "");
  }

  render(): void {
    this.inputAnimationHandler();
  }
}

const Input = ({ type, name, placeholderText }: InputProps) => {
  const componentData = {
    type,
    name,
    placeholder: placeholderText,
    className: { ...styles },
  };

  return new InputComponent(template, componentData);
};

export default Input;
