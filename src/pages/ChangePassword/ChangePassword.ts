import template from "bundle-text:./ChangePassword.html";
import * as styles from "./styles.module.scss";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileData from "src/components/ProfileData/ProfileData";
import Button, { ButtonComponent } from "../../components/Button/Button";
import { FieldsProps } from "../Profile/types";
import { ProfileCommonProps } from "../Profile/types";
import Component from "src/modules/Component";
import { NestedComponents, onSubmitFomsHandler } from "src/utils";

const FiledsList = (fieldsProps: FieldsProps[], disabled?: "disabled") =>
  fieldsProps.reduce(
    (accumulator, props) => ({
      ...accumulator,
      [props.inputName]: ProfileData({ disabled, ...props }),
    }),
    {}
  );

class ChangePasswordComponent extends Component {
  nestedComponents: NestedComponents;
  button: ButtonComponent;

  constructor(template: string, props: any) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents;
    this.button = this.nestedComponents.Button;
  }

  componentDidMount(): void {
    !this.getProps.disabled &&
      onSubmitFomsHandler(this.button.getNode, this.nestedComponents);
  }
}

const ChangePassword = ({
  name = "Имя",
  avatarProps,
  fieldsProps,
}: ProfileCommonProps) => {
  const componentData = {
    className: { ...styles },
    name,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: Button({ text: "Сохранить" }),
      ...FiledsList(fieldsProps),
    },
  };

  return new ChangePasswordComponent(template, componentData).getNode;
};

export default ChangePassword;
