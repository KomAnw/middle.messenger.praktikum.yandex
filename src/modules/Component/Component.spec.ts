import { expect } from 'chai';
import Component from './Component';
import { Props } from './types';

class ButtonComponent<P extends Props> extends Component<P> {}
const template = `<button class="{{className.button}}">{{name}}</button>`;
const props = { name: 'Кнопка' };

describe('Component', function () {
  const component = new ButtonComponent(template, props);

  it('Должен быть экземпляром класса ButtonComponent', () =>
    expect(component).to.be.an.instanceof(ButtonComponent));

  it('Должен иметь свойство getNode', () => expect(component).to.have.property('getNode'));
});
