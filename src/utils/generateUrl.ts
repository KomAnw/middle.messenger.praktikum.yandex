import { BASE_URL } from "src/api/constants";

const addBaseUrl = (BASE_URL: string) => (path: string) => (slug: string) =>
  `${BASE_URL}/${path}/${slug}`;

const addInstancePath = addBaseUrl(BASE_URL);

export default addInstancePath;
