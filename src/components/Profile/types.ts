import {ProfileAvatarProps} from 'src/components/ProfileAvatar/types';

export type FieldsProps = {
  fieldName: string;
  data: string;
};

export type ProfileCommonProps = {
  name: string;
  avatarProps: ProfileAvatarProps;
  fieldsProps: FieldsProps[];
  disabled?: 'disabled';
};
