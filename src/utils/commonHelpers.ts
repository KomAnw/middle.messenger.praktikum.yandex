import {PlainObject} from './isObjectsEqual';

export const isArray = (value: unknown): value is [] => Array.isArray(value);

export const isArrayOrObject = (value: unknown): value is [] | PlainObject =>
  isPlainObject(value) || isArray(value);

export const isPlainObject = (value: unknown): value is PlainObject =>
  typeof value === 'object' &&
  value !== null &&
  value.constructor === Object &&
  Object.prototype.toString.call(value) === '[object Object]';
