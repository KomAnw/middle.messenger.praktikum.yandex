import template from "bundle-text:./ProfileData.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component/Component";
import { ProfileDataProps } from "./types";

const ProfileData = ({ fieldName, data = "", disabled, type = "text" }: ProfileDataProps) => {
  const { wrapper, container, name, input, divider } = styles;
  const componentData = {
    fieldName,
    data,
    value: data,
    disabled,
    type,
    className: { wrapper, container, name, input, divider },
  };

  return new Component({ template, componentData }).createComponent();
};

export default ProfileData;
