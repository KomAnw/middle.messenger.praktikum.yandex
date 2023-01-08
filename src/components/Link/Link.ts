import { Props } from 'src/modules/Component/types';
import Component from 'src/modules/Component';
import template from './Link.html';
import styles from './styles.module.scss';
import { LinkProps } from './types';

export class LinkComponent<P extends Props> extends Component<P> {
  linkHandler() {
    this.getNode.addEventListener('click', () =>
      window.history.pushState(`${this.getProps.url}`, '', `${this.getProps.url}`)
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
    className: { ...styles }
  };

  return new LinkComponent(template, componentData);
};

export default Link;
