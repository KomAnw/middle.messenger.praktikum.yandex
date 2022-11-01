import template from 'bundle-text:./Input.html';
import * as styles from './styles.module.scss';
import {InputProps} from './types';
import Component from 'src/modules/component/Component';

const InputHandler = (selector: string) => (node: Element) => {
  const element = node.querySelector(`.${selector}`);
  element &&
    element.addEventListener('keyup', (event: Event) => {
      const target = event.target as HTMLInputElement;
      element.setAttribute('value', target.value);
    });

  // after build parcel remove imput value if it empty
  element?.setAttribute('value', '');
};

const Input = ({type, name, placeholderText}: InputProps) => {
  const {input, wrapper, placeholder} = styles;
  const script = InputHandler(input);
  const componentData = {
    type,
    name,
    placeholder: placeholderText,
    className: {wrapper, input, placeholder},
  };

  return new Component({template, componentData, script}).createComponent();
};

export default Input;
