import {ValidationValues} from './../Validator/types';
import {ButtonComponent} from 'src/components/Button/Button';
import {InputComponent} from 'src/components/Input/Input';
import {LinkComponent} from 'src/components/Link/Link';
import {FieldsProps} from 'src/pages/Profile/types';
import {ProfileAvatarComponent} from 'src/components/ProfileAvatar/ProfileAvatar';

export type Props = {
  [key: string]:
    | (string | undefined)
    | ClassName
    | ValidationValues
    | NestedComponents
    | FieldsProps[];
};

export type ClassName = {
  [key: string]: string;
};

export type NestedComponents = {
  [key: string]: NestedComponent;
};

export type NestedComponent =
  | InputComponent<Props>
  | ButtonComponent<Props>
  | LinkComponent<Props>
  | ProfileAvatarComponent<Props>;
