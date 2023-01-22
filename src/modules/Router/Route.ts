// import { isEqual } from "../../utils/isEqual";
// import { render } from "../../utils/renderDOM";

import { Sections } from './types';

class Route {
  public pathname: string;

  public block: any;

  constructor(locationPath: string, section: Sections) {
    this.pathname = locationPath;
    this.block = section;
  }
}

export default Route;
