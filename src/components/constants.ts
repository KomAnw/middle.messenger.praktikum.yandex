export const mailRegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const numberRegExp = /^([^0-9]*)$/;
export const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const errors = {
  requiredFiled: 'Это обязательное поле',
  emailRequired: 'Необходимо ввести корректный email',
  minLength: 'Необходимое количество символов:',
  maxLength: 'Максимальное количество символов:',
  numbersUnacceptable: 'Цифры недопустимы в этом поле',
  onlyNumbersRequired: 'Допустимы только цифры',
  incorrecPhone: 'Некорректный номер телефона',
  correct: '',
};
