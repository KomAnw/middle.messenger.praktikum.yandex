import template from "bundle-text:./Link.html";
import * as styles from "./styles.module.scss";
import { LinkProps } from "./types";
import Component from "src/modules/component/Component";

const linkHandler = (url: string) => (node: Element) => {
  node.addEventListener("click", () => window.history.pushState({}, "", `${url}`));
};

const Link = ({ url, text }: LinkProps) => {
  const componentData = {
    text,
    className: styles.link,
  };

  const script = linkHandler(url);

  return new Component({ template, componentData, script }).createComponent();
};

export default Link;
