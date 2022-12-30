import {isArrayOrObject} from './commonHelpers';

export type PlainObject<T = unknown> = {
  // eslint-disable-next-line
  [k in string]: T;
};

export const isEqual = (lhs: PlainObject, rhs: PlainObject) => {
  // Сравнение количества ключей объектов и массивов
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value as PlainObject, rightValue as PlainObject)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
};
