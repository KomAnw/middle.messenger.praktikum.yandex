import template from "bundle-text:./Profile.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component/Component";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import ProfileData from "src/components/ProfileData/ProfileData";
import { FieldsProps, ProfileCommonProps } from "./types";
import Button from "../Button/Button";

const FiledsList = (fieldsProps: FieldsProps[], disabled?: "disabled") => {
  const container = document.createDocumentFragment();
  const components = fieldsProps.map(({ fieldName, data }) =>
    ProfileData({ fieldName, data, disabled })
  );
  components.forEach((elem) => container.appendChild(elem));
  return container;
};

const Profile = ({ name = "Имя", avatarProps, fieldsProps, disabled }: ProfileCommonProps) => {
  const Avatar = ProfileAvatar(avatarProps);
  const ButtonComponent = !disabled && Button({ text: "Сохранить" });
  const {
    profile,
    top,
    profileName,
    fieldsList,
    common,
    change,
    exit,
    buttonsContainer,
    divider,
    button,
  } = styles;
  const componentData = {
    className: {
      profile,
      top,
      profileName,
      fieldsList,
      common,
      change,
      exit,
      buttonsContainer,
      button,
      divider,
    },
    name,
    disabled,
  };
  const nestedComponents = {
    Avatar,
    FieldsList: FiledsList(fieldsProps, disabled),
    Button: disabled ? "" : ButtonComponent,
  };

  return new Component({ template, componentData, nestedComponents }).createComponent();
};

export default Profile;
