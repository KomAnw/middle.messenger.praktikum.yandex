import { AppStoreState } from "./types";

const appStore: AppStoreState = {
  user: null,
};

const appStoreProxy = new Proxy(appStore, {
  get(target, prop) {
    if (prop in target) {
      return target[prop as keyof typeof target];
    } else {
      return undefined;
    }
  },
  set(target, prop, value) {
    target[prop as keyof typeof target] = value;
    return true;
  },
  deleteProperty(target, prop) {
    delete target[prop as keyof typeof target];
    return true;
  },
});

export default appStoreProxy;
