import { errors, mailRegExp, numberRegExp, phoneRegExp } from 'src/components/constants';
import { ValidationValues } from './types';

export class Validator {
  private errors: { [key: string]: string };

  private makeError: Function;

  private removeError: Function;

  constructor(makeError: Function, removeError: Function) {
    this.errors = errors;
    this.makeError = makeError;
    this.removeError = removeError;
  }

  public checkValidation(input: HTMLInputElement, validationRules: ValidationValues) {
    const { value } = input;
    const { required, email, min, max, witoutNumbers, onlyNumbers, phone } = validationRules;
    const {
      requiredFiled,
      emailRequired,
      minLength,
      maxLength,
      correct,
      numbersUnacceptable,
      onlyNumbersRequired,
      incorrecPhone
    } = this.errors;

    switch (true) {
      case required && !value:
        this.makeError(requiredFiled);
        break;
      case email && !mailRegExp.test(value):
        this.makeError(emailRequired);
        break;
      case min && value.length < min:
        this.makeError(`${minLength} ${min}`);
        break;
      case max && value.length > max:
        this.makeError(`${maxLength} ${max}`);
        break;
      case witoutNumbers && !numberRegExp.test(value):
        this.makeError(numbersUnacceptable);
        break;
      case onlyNumbers && numberRegExp.test(value):
        this.makeError(onlyNumbersRequired);
        break;
      case phone && !phoneRegExp.test(value):
        this.makeError(incorrecPhone);
        break;
      default:
        this.removeError(correct);
        break;
    }
  }
}
