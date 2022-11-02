import template from "bundle-text:./Error.html";
import * as styles from "./styles.module.scss";
import archive from "src/archive.json";
import { ErrorProps } from "./types";
import Link from "../Link/Link";
import Component from "src/modules/Component";

const linkProps = {
  url: archive.errorPages.link.url,
  text: archive.errorPages.link.text,
};
class ErrorComponent extends Component {
  constructor(template: string, props: any) {
    super(template, props);
  }

  render() {
    const nestedComponents = {
      link: Link(linkProps).getNode,
    };
    this.replaceNodesToComponents(nestedComponents);
  }
}

const Error = ({ error, errorMessage }: ErrorProps) => {
  const componentData = {
    error,
    errorMessage,
    className: { ...styles },
  };

  return new ErrorComponent(template, componentData).getNode;
};

export default Error;
