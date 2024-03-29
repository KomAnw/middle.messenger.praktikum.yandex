import { HTTPMethod, Options, METHODS, FetchOptions } from './types';

const queryStringify = (data: { [s: string]: unknown } | ArrayLike<unknown>) => {
  const entries = Object.entries(data).map(([key, val]) => `${key}=${val}`);
  return `?${entries.join('&')}`;
};

const request = (url: string, options: Options) => {
  const { data, headers, methodType, timeout } = options;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(methodType, url);

    if (headers) {
      Object.entries(headers).forEach(([key, val]) => xhr.setRequestHeader(key, val as string));
    }

    xhr.withCredentials = true;
    xhr.timeout = timeout || 5000;
    xhr.onload = () => resolve(xhr);
    xhr.onerror = () => reject('Error occured');
    xhr.onabort = () => reject('Aborted');
    xhr.ontimeout = () => reject('Timeout occured');

    if (methodType === METHODS.GET || !data) {
      xhr.send();
    } else {
      xhr.send(data);
    }
  });
};

const get: HTTPMethod = (url, options) => {
  const queryUrl = options && `${url}${queryStringify(options?.data)}`;

  return request(queryUrl || url, {
    methodType: options?.methodType || METHODS.GET
  });
};

const put: HTTPMethod = (url, options) => request(url, { ...options, methodType: METHODS.PUT });

const post: HTTPMethod = (url, options) => request(url, { ...options, methodType: METHODS.POST });

const del: HTTPMethod = (url, options) => request(url, { ...options, methodType: METHODS.DELETE });

const defineMethod = (method: keyof typeof METHODS | undefined) => {
  switch (method) {
    case METHODS.GET:
      return get;
    case METHODS.POST:
      return post;
    case METHODS.PUT:
      return put;
    case METHODS.DELETE:
      return del;
    default:
      return get;
  }
};

const throwError = (response: any, status: number) => {
  if (status >= 200 && status <= 299) {
    return true;
  }

  if (status === 404) {
    throw new Error(`${JSON.parse(response).reason}`);
  }

  if (status === 500) {
    throw new Error(`${response}`);
  }
};

const Fetch = async (url: string, options?: FetchOptions) => {
  const method = defineMethod(options?.methodType);
  const { response, status } = (await method(url, options)) as XMLHttpRequest;

  throwError(response, status);

  const result = {
    response,
    status,
    ok: !!(status >= 200 && status <= 299),
    json: () => JSON.parse(response)
  };

  return result;
};

export default Fetch;
