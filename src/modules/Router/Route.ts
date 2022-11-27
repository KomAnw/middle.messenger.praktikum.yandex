// import { isEqual } from "../../utils/isEqual";
// import { render } from "../../utils/renderDOM";

import { Sections } from "./types";

class Route {
  public pathname: string;
  public block: any;

  constructor(locationPath: string, section: Sections) {
    this.pathname = locationPath;
    this.block = section;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      // this.render();
    }
  }

  leave() {
    if (this.block) {
      // this.block.hide();
      return this.block;
    }
  }

  match(pathname: string) {
    if (pathname) {
      return true;
    }
  }
}

export default Route;
