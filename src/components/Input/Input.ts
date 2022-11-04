import template from "bundle-text:./Input.html";
import * as styles from "./styles.module.scss";
import { InputProps } from "./types";
import Component from "src/modules/Component/Component";
import {
  errors,
  mailRegExp,
  numberRegExp,
  phoneRegExp,
} from "src/components/constants";
import { Validator } from "src/modules/Validator/Validator";

export class InputComponent extends Component {
  public isValid: boolean;
  private input: HTMLInputElement;
  private errorField: HTMLElement;
  private validator: Validator;

  constructor(template: string, props: any) {
    super(template, props);
    this.isValid = false;
    this.input = this.getNode.querySelector("input")!;
    this.errorField = this.getNode.querySelector("p")!;
    this.validator = new Validator(
      this.makeErorr.bind(this),
      this.removeErorr.bind(this)
    );
  }

  get value() {
    return this.input.value;
  }

  get name() {
    return this.input.name;
  }

  componentDidMount(): void {
    const { validationRules } = this.getProps;
    validationRules &&
      this.input.addEventListener("focus", () => this.runValidation());
    validationRules &&
      this.input.addEventListener("blur", () => this.runValidation());
  }

  runValidation() {
    this.validator.checkValidation(this.input, this.getProps.validationRules);
  }

  inputAnimationHandler() {
    const element = this.getNode.querySelector(`input`);
    element?.addEventListener("keyup", (event: Event) => {
      const target = event.target as HTMLInputElement;
      element.setAttribute("value", target.value);
    });
  }

  makeErorr(error: string) {
    this.errorField.textContent = error;
    this.input.setCustomValidity(error);
    this.isValid = false;
  }

  removeErorr(error: string) {
    this.errorField.textContent = error;
    this.input.setCustomValidity(error);
    this.isValid = true;
  }

  render(): void {
    this.inputAnimationHandler();
  }
}

const Input = ({
  type,
  name,
  placeholderText,
  validationRules,
}: InputProps) => {
  const componentData = {
    type,
    name,
    placeholder: placeholderText,
    className: { ...styles },
    validationRules,
  };

  return new InputComponent(template, componentData);
};

export default Input;
