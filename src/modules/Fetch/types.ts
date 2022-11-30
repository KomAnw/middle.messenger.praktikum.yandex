export type HTTPMethod = (
  url: string,
  options?: FetchOptions
) => Promise<unknown>;

export type Options = {
  data?: any;
  timeout?: number;
  methodType: keyof typeof METHODS;
  headers?: { [key: string]: string };
};

export type FetchOptions = {
  data?: any;
  timeout?: number;
  methodType?: keyof typeof METHODS;
  headers?: any;
  credentials?: string;
  mode?: string;
};

export enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export type Response = ErrorResponse | SuccsessResponse;

export type ErrorResponse = {
  reason: string;
};

export type SuccsessResponse = {
  [key: string]: any;
};
