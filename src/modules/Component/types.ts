import { ValidationValues } from "./../Validator/types";
import { ButtonComponent } from "src/components/Button/Button";
import { InputComponent } from "src/components/Input/Input";
import { LinkComponent } from "src/components/Link/Link";
import { ProfileAvatarComponent } from "src/components/ProfileAvatar/ProfileAvatar";

export type BaseProps = {
  styles?: any;
  nestedComponents?: NestedComponents;
  validationRules?: ValidationValues;
};

export type Props = BaseProps & ComponentsProps;
export type ComponentsProps = Record<string, any>;
export type NestedComponents = Record<string, NestedComponent>;

export type NestedComponent =
  | InputComponent<Props>
  | ButtonComponent<Props>
  | LinkComponent<Props>
  | ProfileAvatarComponent<Props>
  | DocumentFragment;
