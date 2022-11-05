export type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

export type Options = {
  data?: any;
  timeout?: number;
  method: string;
  headers?: any;
};
