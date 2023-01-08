import { Props } from 'src/modules/Component/types';
import Component from 'src/modules/Component';
import template from './Button.html';
import styles from './styles.module.scss';
import { ButtonProps } from './types';

export class ButtonComponent<P extends Props> extends Component<P> {}

const Button = ({ text }: ButtonProps) => {
  const componentData = {
    name: text,
    className: { ...styles }
  };

  return new ButtonComponent(template, componentData);
};

export default Button;
