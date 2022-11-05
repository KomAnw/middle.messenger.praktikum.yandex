import {Props} from 'src/modules/Component/types';
import template from 'bundle-text:./Error.html';
import * as styles from './styles.module.scss';
import archive from 'src/archive.json';
import {ComponentData, ErrorProps} from './types';
import Link from '../Link/Link';
import Component from 'src/modules/Component';

const linkProps = {
  url: archive.errorPages.link.url,
  text: archive.errorPages.link.text,
};

class ErrorComponent<P extends Props> extends Component<P> {
  constructor(template: string, props: P) {
    super(template, props);
  }
}

const Error = ({error, errorMessage}: ErrorProps) => {
  const componentData: ComponentData = {
    error,
    errorMessage,
    className: {...styles},
    nestedComponents: {link: Link(linkProps)},
  };

  return new ErrorComponent(template, componentData).getNode;
};

export default Error;
