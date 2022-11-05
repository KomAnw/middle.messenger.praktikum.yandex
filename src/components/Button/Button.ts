import {Props} from 'src/modules/Component/types';
import template from 'bundle-text:./Button.html';
import Component from 'src/modules/Component';
import * as styles from './styles.module.scss';
import {ButtonProps} from './types';

export class ButtonComponent<P extends Props> extends Component<P> {
  constructor(template: string, props: P) {
    super(template, props);
  }
}

const Button = ({text}: ButtonProps) => {
  const componentData = {
    name: text,
    className: {...styles},
  };

  return new ButtonComponent(template, componentData);
};

export default Button;
