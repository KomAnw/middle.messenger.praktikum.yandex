import { BASE_URL_API } from "src/api/constants";

const addBaseUrl = (BASE_URL_API: string) => (path: string) => (slug: string) =>
  `${BASE_URL_API}/${path}/${slug}`;

const addInstancePath = addBaseUrl(BASE_URL_API);

export default addInstancePath;
