import { NestedComponents, Props } from "src/modules/Component/types";
import template from "bundle-text:./Profile.html";
import * as styles from "./styles.module.scss";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileData from "src/components/ProfileData/ProfileData";
import { FieldsProps, ProfileCommonProps } from "./types";
import Button from "../../components/Button/Button";
import Component from "src/modules/Component";
import { onSubmitFomsHandler } from "src/utils/onSubmitFomsHandler";
import { logout } from "src/api/Auth/Auth";

const FiledsList = (fieldsProps: FieldsProps[], disabled?: "disabled") =>
  fieldsProps.reduce(
    (accumulator, props) => ({
      ...accumulator,
      [props.inputName]: ProfileData({ disabled, ...props }),
    }),
    {}
  );
class ProfileComponent<P extends Props> extends Component<P> {
  nestedComponents: NestedComponents;
  form: HTMLFormElement;
  exitButton = this.getNode.querySelector(".exit");

  constructor(template: string, props: P) {
    super(template, props);
    this.nestedComponents = this.getProps.nestedComponents as NestedComponents;
    this.form = this.getNode.querySelector("form")!;
  }

  componentDidMount(): void {
    !this.getProps.disabled &&
      onSubmitFomsHandler(this.form, this.nestedComponents);
    this.onExit();
  }

  onExit() {
    this.exitButton?.addEventListener("click", logout);
  }
}

const Profile = ({
  name = "Имя",
  avatarProps,
  fieldsProps,
  disabled,
}: ProfileCommonProps) => {
  const ButtonComponent = !disabled && Button({ text: "Сохранить" });
  const componentData = {
    className: { ...styles },
    name,
    disabled,
    avatarProps,
    fieldsProps,
    nestedComponents: {
      Avatar: ProfileAvatar(avatarProps),
      Button: ButtonComponent || document.createDocumentFragment(),
      ...FiledsList(fieldsProps, disabled),
    },
  };

  return new ProfileComponent(template, componentData as Props).getNode;
};

export default Profile;
