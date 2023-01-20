import { ValidationValues } from 'src/modules/Validator/types';

export type ProfileDataProps = {
  fieldName: string;
  data?: string;
  disabled?: 'disabled';
  type?: 'password' | 'text';
  inputName: string;
  validationRules: ValidationValues;
};
