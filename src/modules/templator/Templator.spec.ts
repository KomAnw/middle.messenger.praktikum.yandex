import { expect } from 'chai';
import Templator from './Templator';

const template = `<button class="{{className.button}}">{{name}}</button>`;
const props = { name: 'Кнопка' };

describe('Tempaltor', function () {
  const templatorInstance = new Templator(template);
  const compiledTempate = templatorInstance.compile(props);
  it('Должен быть экземпляром класса Templator', () =>
    expect(templatorInstance).to.be.an.instanceof(Templator));

  it('Скомпилированный темплейт не содержит специальных символов для замены переменными', () => {
    expect(compiledTempate).to.not.include('{');
    expect(compiledTempate).to.not.include('}');
  });

  it('Скомпилированный темплейт - это строка', () =>
    expect(templatorInstance.compile(props)).to.be.a('string'));
});
