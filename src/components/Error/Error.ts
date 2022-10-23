import template from "bundle-text:./Error.html";
import Component from "src/modules/component/Component";
import * as styles from "./styles.module.scss";
import archive from "src/archive.json";
import { ErrorProps } from "./types";
import Link from "../Link/Link";

const Error = ({ error, errorMessage }: ErrorProps) => {
  const { text, container, title, description, wrapper } = styles;
  const linkProps = { url: archive.errorPages.link.url, text: archive.errorPages.link.text };
  const componentData = {
    error,
    errorMessage,
    className: { container, title, description, text, wrapper },
  };
  const nestedComponents = {
    link: Link(linkProps),
  };

  return new Component({ template, componentData, nestedComponents }).createComponent();
};

export const ServerError = Error({
  error: archive.errorPages.server.error,
  errorMessage: archive.errorPages.server.description,
});

export const ClientError = Error({
  error: archive.errorPages.client.error,
  errorMessage: archive.errorPages.client.description,
});
