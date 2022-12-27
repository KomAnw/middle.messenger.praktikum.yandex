import { AppState, ICustomEvent } from "./types";

class Store {
  static instance: null | Store = null;
  private state = {
    user: null,
    chats: null,
    selectedChat: null,
  };

  constructor() {
    if (Store.instance) {
      return Store.instance;
    }
    Store.instance = this;
  }

  public get store() {
    return this.state;
  }

  public getState<T extends AppState, K extends keyof T>(
    name: K
  ): T[K] | undefined | null {
    if (name in this.state) {
      return this.state[name as keyof AppState];
    }
    return undefined;
  }

  public setState(name: keyof AppState, value: any, flag?: boolean) {
    if (flag && typeof this.state[name] === "object") {
      this.state[name] = {
        ...(this.state[name] as unknown as Object),
        ...value,
      };
      return true;
    }

    this.state[name] = value;
    this.createEvent(name, value);
    return true;
  }

  public deleteState(name?: keyof AppState) {
    if (name) {
      this.state[name] = null;
      return;
    }
    this.state = {
      user: null,
      chats: null,
      selectedChat: null,
    };
  }

  /**
   * @method
   * @name subscribe
   *
   * @description method create event on document
   * to detect any change of slice of store, and connect your callBack
   * @param {string} storeType slice.
   * @param {function}  callBack - any callBack.
   * @example
   * appStore.subscribe("user", (event: ICustomEvent) =>
   *  // do work
   * );
   */
  subscribe = (
    storeType: keyof AppState,
    callBack: (event: ICustomEvent) => void
  ) => {
    document.addEventListener(storeType, callBack);
  };

  unSubscribe = (
    storeType: keyof AppState,
    callBack: EventListenerOrEventListenerObject
  ) => {
    document.removeEventListener(storeType, callBack);
  };

  private createEvent(name: string, value: any) {
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail: value,
    });

    return document.dispatchEvent(event);
  }
}

export const appStore = new Store();
