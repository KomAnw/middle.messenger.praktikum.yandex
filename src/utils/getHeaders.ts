import { ContentTypes } from "src/api/types";

const getHeaders = (type: ContentTypes) => {
  const headers = new Headers();
  headers.append("Content-Type", type);
  return headers;
};

export default getHeaders;
