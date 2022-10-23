import template from "bundle-text:./Link.html";
import * as styles from "./styles.module.scss";
import { LinkProps } from "./types";
import Component from "src/modules/component/Component";

const Link = ({ url, text }: LinkProps) => {
  const componentData = {
    text,
    url,
    className: styles.link,
  };

  return new Component({ template, componentData }).createComponent();
};

export default Link;
