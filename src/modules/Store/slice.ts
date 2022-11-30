import appStoreProxy from "./Store";
import { AppStoreState } from "./types";

export const createSlice = <S extends keyof AppStoreState, T extends Object>(
  sliceName: S,
  obj: T
): T => {
  const proxy = new Proxy(obj, {
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
  });
  appStoreProxy[sliceName] = proxy;
  return proxy;
};

export const removeSlice = (sliceName: keyof AppStoreState) =>
  delete appStoreProxy[sliceName];
