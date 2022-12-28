import {Sections} from './types';
import Route from './Route';
import {getSectionByPath, locationPaths} from './routes';

class Router {
  static instance: null | Router = null;
  private currentRoute: null | Route = null;
  private routes: Route[] = [];
  private history: History = window.history;
  private possiblePaths = locationPaths;
  private getSectionByPath = getSectionByPath;
  private appRender: Function;

  constructor(appRender: Function) {
    this.appRender = appRender;
    if (Router.instance) {
      return Router.instance;
    }
    Router.instance = this;
  }

  start() {
    const path = window.location.pathname;
    this.loadSection(path);
    this.listen();
  }

  createRoute(path: string = '/404', section: Sections) {
    const route = section && new Route(path, section);
    route && this.routes.push(route);
    return route;
  }

  async loadSection(pathName: string) {
    const path = this.possiblePaths.find((route) => route === pathName);
    const section = await this.getSectionByPath(path);
    const route = this.createRoute(path, section);
    this.render(route);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.pathname === pathname);
  }

  listen() {
    const currentRoute = this.currentRoute;
    // listen links and buttons
    const callBack = (path: string) => {
      this.loadSection(path);
    };

    const pushState = history.pushState;
    this.history.pushState = function(path: string) {
      // @ts-expect-error
      // eslint-disable-next-line
      pushState.apply(history, arguments);
      path !== currentRoute?.pathname && callBack(path);
    };

    // listen back and forward
    window.onpopstate = (event: PopStateEvent) => {
      const path = event.state;
      path !== currentRoute?.pathname && callBack(path);
    };
  }

  render(route: Route) {
    if (route.pathname === this.currentRoute?.pathname) {
      return;
    }

    this.appRender(route.block);
    this.currentRoute = route;
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }
}

export default Router;
