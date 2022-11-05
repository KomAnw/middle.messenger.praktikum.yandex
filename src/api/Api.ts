import {HTTPMethod, Options} from './types';

enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export class Api {
  constructor() {}

  get: HTTPMethod = (url, options) => {
    const queryUrl = options?.data ?
      `${url}${this.queryStringify(options.data)}` :
      url;
    return this.request(
        queryUrl,
        {...options, method: METHODS.GET},
        options?.timeout
    );
  };

  put: HTTPMethod = (url, options) =>
    this.request(url, {...options, method: METHODS.PUT}, options?.timeout);

  post: HTTPMethod = (url, options) =>
    this.request(url, {...options, method: METHODS.POST}, options?.timeout);

  delete: HTTPMethod = (url, options) =>
    this.request(url, {...options, method: METHODS.DELETE}, options?.timeout);

  private queryStringify(data: { [s: string]: unknown } | ArrayLike<unknown>) {
    const entries = Object.entries(data).map(([key, val]) => `${key}=${val}`);
    return `?${entries.join('&')}`;
  }

  private request = (url: string, options: Options, timeout: number = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      if (options.headers) {
        Object.entries(options.headers).forEach(([key, val]) =>
          xhr.setRequestHeader(key, val as string)
        );
      }

      xhr.onload = () => resolve(xhr);
      xhr.onabort = () => reject('Aborted');
      xhr.onerror = () => reject('Error occured');
      xhr.timeout = timeout;
      xhr.ontimeout = () => reject('Timeout occured');

      if (options.method === METHODS.GET || !options.data) xhr.send();
      else xhr.send(options.data);
    });
  };
}
