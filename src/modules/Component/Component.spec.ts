import { expect } from 'chai';
import Component from './Component';
import { Props } from './types';

class ButtonComponent<P extends Props> extends Component<P> {}
const template = `<button class="{{className.button}}">{{name}}</button>`;
const props = { name: 'Кнопка' };

describe('Tempaltor', function () {
  const component = new ButtonComponent(template, props);

  it('Должен быть экземпляром класса Templator', () =>
    expect(component).to.be.an.instanceof(ButtonComponent));

  // it('Скомпилированный темплейт не содержит специальных символов для замены переменными', () => {
  //   expect(compiledTempate).to.not.include('{');
  //   expect(compiledTempate).to.not.include('}');
  // });

  // it('Скомпилированный темплейт - это строка', () =>
  //   expect(templatorInstance.compile(props)).to.be.a('string'));
});
