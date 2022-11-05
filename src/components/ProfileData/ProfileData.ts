import {ValidationValues} from './../../modules/Validator/types';
import template from 'bundle-text:./ProfileData.html';
import Component from 'src/modules/Component';
import {Props} from 'src/modules/Component/types';
import {Validator} from 'src/modules/Validator/Validator';
import * as styles from './styles.module.scss';
import {ProfileDataProps} from './types';

export class ProfileDataComponent<P extends Props> extends Component<P> {
  public isValid: boolean;
  private input: HTMLInputElement;
  private errorField: HTMLElement;
  private validator: Validator;

  constructor(template: string, props: P) {
    super(template, props);
    this.isValid = false;
    this.input = this.getNode.querySelector('input')!;
    this.errorField = this.getNode.querySelector('span')!;
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
    const {validationRules} = this.getProps;
    validationRules &&
      this.input.addEventListener('focus', () => this.runValidation());
    validationRules &&
      this.input.addEventListener('blur', () => this.runValidation());
  }

  runValidation() {
    this.validator.checkValidation(
        this.input,
      this.getProps.validationRules as ValidationValues
    );
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
}

const ProfileData = ({
  fieldName,
  data = '',
  inputName,
  disabled,
  type = 'text',
  validationRules,
}: ProfileDataProps) => {
  const componentData = {
    fieldName,
    data,
    value: data,
    disabled,
    type,
    inputName,
    className: {...styles},
    validationRules,
  };

  return new ProfileDataComponent(template, componentData);
};

export default ProfileData;
