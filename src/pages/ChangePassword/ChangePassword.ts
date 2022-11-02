import template from "bundle-text:./ChangePassword.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component1/Component";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileData from "src/components/ProfileData/ProfileData";
import Button from "../../components/Button/Button";
import { FieldsProps } from "../Profile/types";
import { ProfileCommonProps } from "../Profile/types";

const FiledsList = (fieldsProps: FieldsProps[]) => {
  const container = document.createDocumentFragment();
  const components = fieldsProps.map(({ fieldName, data, inputName }) =>
    ProfileData({ fieldName, data, inputName, type: "password" })
  );
  components.forEach((elem) => container.appendChild(elem));
  return container;
};

const ChangePassword = ({
  name = "Имя",
  avatarProps,
  fieldsProps,
}: ProfileCommonProps) => {
  const Avatar = ProfileAvatar(avatarProps);
  const ButtonComponent = Button({ text: "Сохранить" });
  const { profile, top, profileName, fieldsList } = styles;
  const componentData = {
    className: { profile, top, profileName, fieldsList },
    name,
  };
  const nestedComponents = {
    Avatar,
    FieldsList: FiledsList(fieldsProps),
    Button: ButtonComponent,
  };

  return new Component({
    template,
    componentData,
    nestedComponents,
  }).createComponent();
};

export default ChangePassword;
