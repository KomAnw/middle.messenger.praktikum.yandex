import { Props } from 'src/modules/Component/types';
import archive from 'src/archive.json';
import Component from 'src/modules/Component';
import template from './Error.html';
import styles from './styles.module.scss';
import { ErrorProps } from './types';
import Link from '../Link/Link';

const linkProps = {
  url: archive.errorPages.link.url,
  text: archive.errorPages.link.text
};

class ErrorComponent<P extends Props> extends Component<P> {}

const Error = ({ error, errorMessage }: ErrorProps) => {
  const componentData = {
    error,
    errorMessage,
    className: { ...styles },
    nestedComponents: { link: Link(linkProps) }
  };

  return new ErrorComponent(template, componentData).getNode;
};

export default Error;
