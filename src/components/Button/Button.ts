import template from 'bundle-text:./Button.html';
import Component from 'src/modules/component/Component';
import * as styles from './styles.module.scss';
import {ButtonProps} from './types';

const Button = ({text}: ButtonProps) => {
  const componentData = {
    name: text,
    className: styles.button,
  };

  return new Component({template, componentData}).createComponent();
};

export default Button;
