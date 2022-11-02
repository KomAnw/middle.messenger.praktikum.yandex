import template from "bundle-text:./Link.html";
import Component from "src/modules/Component";
import * as styles from "./styles.module.scss";
import { LinkProps } from "./types";

class LinkComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }

  linkHandler() {
    this.getNode.addEventListener("click", () =>
      window.history.pushState({}, "", `${this.getProps.url}`)
    );
  }

  render(): void {
    this.linkHandler();
  }
}

const Link = ({ url, text }: LinkProps) => {
  const componentData = {
    text,
    url,
    className: styles.link,
  };

  return new LinkComponent(template, componentData);
};

export default Link;
