export type Options = {
  data?: any;
  timeout?: number;
  method: string;
  headers?: any;
};

export class Api {
  static METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  };
  constructor() {}

  get = (url: string, options: Options) => {
    const queryUrl = options.data ?
      `${url}${this.queryStringify(options.data)}` :
      url;
    return this.request(
        queryUrl,
        {...options, method: Api.METHODS.GET},
        options.timeout
    );
  };

  put = (url: any, options: Options) =>
    this.request(url, {...options, method: Api.METHODS.PUT}, options.timeout);

  post = (url: any, options: Options) =>
    this.request(
        url,
        {...options, method: Api.METHODS.POST},
        options.timeout
    );

  delete = (url: any, options: Options) =>
    this.request(
        url,
        {...options, method: Api.METHODS.DELETE},
        options.timeout
    );

  private queryStringify(data: { [s: string]: unknown } | ArrayLike<unknown>) {
    const entries = Object.entries(data).map(([key, val]) => `${key}=${val}`);
    return `?${entries.join('&')}`;
  }

  private request = (
      url: string | URL,
      options: Options,
      timeout: number = 5000
  ) => {
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

      if (options.method === Api.METHODS.GET || !options.data) xhr.send();
      else xhr.send(options.data);
    });
  };
}
