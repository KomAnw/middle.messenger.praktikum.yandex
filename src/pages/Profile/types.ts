import {ProfileAvatarProps} from 'src/components/ProfileAvatar/types';
import {ValidationValues} from 'src/modules/Validator/types';

export type FieldsProps = {
  fieldName: string;
  data: string;
  inputName: string;
  validationRules: ValidationValues;
};

export type ProfileCommonProps = {
  name: string;
  avatarProps: ProfileAvatarProps;
  fieldsProps: FieldsProps[];
  disabled?: 'disabled';
};
