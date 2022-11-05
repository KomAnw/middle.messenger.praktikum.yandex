import {ValidationValues} from 'src/modules/Validator/types';
export type InputProps = {
  type: string;
  name: string;
  placeholderText: string;
  validationRules?: ValidationValues;
};
