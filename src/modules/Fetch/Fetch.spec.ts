import { expect } from 'chai';
import { BASE_URL_HTTPS } from 'src/api/constants';
import Fetch from './Fetch';

describe('Fetch', () => {
  const url = `https://${BASE_URL_HTTPS}/api/v2`;
  const response = Fetch(url);

  function isPromise(p: Promise<any>) {
    if (typeof p === 'object' && typeof p.then === 'function') {
      return true;
    }

    return false;
  }

  it('Должен возвращать промис', async () => {
    isPromise(response);
  });
});
