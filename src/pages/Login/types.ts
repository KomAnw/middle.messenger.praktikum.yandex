import { LinkComponent } from "./../../components/Link/Link";
import { ButtonComponent } from "./../../components/Button/Button";
import { InputComponent } from "src/components/Input/Input";

export type NestedComponents = {
  [key: string]: NestedComponent;
};

export type NestedComponent = InputComponent | ButtonComponent | LinkComponent;
