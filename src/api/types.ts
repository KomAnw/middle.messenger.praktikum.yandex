/* eslint-disable */
export enum ContentTypes {
  applicationJSON = "application/json",
  muiltiparFormData = "multipart/form-data",
}

export enum ResponseStatuses {
  ok = 200,
  error = 0,
}

export enum ReadyStateStatuses {
  UNSENT = 0,
  OPENED = 1,
  HEADERS_RECEIVED = 2,
  LOADING = 3,
  DONE = 4,
}

export interface ICustomWSSEvent extends Event {
  message?: any;
}
