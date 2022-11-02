import template from "bundle-text:./ProfileAvatar.html";
import * as styles from "./styles.module.scss";
import Component from "src/modules/component1/Component";
import { ProfileAvatarProps } from "./types";
import avatar from "../../../static/assets/profile/avatar.jpg";

const setSrc = (component: HTMLImageElement) => {
  const img = component.querySelector("img")!;
  const { src } = img.dataset;
  img.setAttribute("src", `${src}`);
  return component;
};

const ProfileAvatar = ({
  link = avatar,
  alt = "My avatar",
}: ProfileAvatarProps) => {
  const { avatar, container, text, background } = styles;
  const componentData = {
    link,
    alt,
    className: { avatar, container, text, background },
  };

  const result = new Component({ template, componentData }).createComponent();
  return setSrc(result as HTMLImageElement);
};

export default ProfileAvatar;
