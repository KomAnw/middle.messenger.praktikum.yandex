import { isEqual } from "src/utils/isObjectsEqual";
import CustomHTMLComponent from "../CustomHTMLComponent/CustomHTMLComponent";
import Templator from "../templator/Templator";
import { Props } from "./types";

class Component<P extends Props> {
  private wrapper: HTMLElement | null;
  private templator: Templator;
  private compiledTemplate: string;

  constructor(template: string, private props: P) {
    this.props = this.makePropsProxy(props);
    this.compiledTemplate = "";
    this.wrapper = null;
    this.templator = new Templator(template);
    this._init();
  }

  get getNode(): HTMLElement {
    return this.wrapper as HTMLElement;
  }

  get getProps() {
    return this.props;
  }

  private createTemplate() {
    this.compiledTemplate = this.templator.compile(this.props);
  }

  private _init() {
    this.createTemplate();
    this._render();
  }

  private dispatchComponentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const oldNode = this.getNode;
    this.createTemplate();
    this._render();
    this.reRender(oldNode);
    this.componentDidUpdate(oldProps, newProps);
  }

  componentDidUpdate(oldProps: P, newProps: P) {}

  private makePropsProxy(props: P) {
    const callCDU = this._componentDidUpdate.bind(this);
    return new Proxy(props, {
      get(target, prop) {
        return target[prop as keyof P];
      },
      set(target, prop, value) {
        const oldProps = { ...target };
        const newProps = target;
        target[prop as keyof P] = value;
        callCDU(oldProps, newProps);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  setProps = (nextProps: Props) => {
    const newProps = {
      ...this.props,
      ...nextProps,
    };

    if (!nextProps || isEqual(this.props, newProps)) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private replaceNodesToComponents() {
    const components = this.wrapper?.querySelectorAll("component");

    this.props.nestedComponents &&
      components?.forEach((customComponent) => {
        const componentId = customComponent.id;
        const nestedComponent = this.props.nestedComponents!;
        const component = nestedComponent[componentId];
        if (component instanceof DocumentFragment) {
          customComponent.replaceWith(component);
        } else {
          const newComponent = nestedComponent[componentId] as Component<P>;
          customComponent.replaceWith(newComponent.getNode);
        }
      });
  }

  private _render() {
    this.wrapper = new CustomHTMLComponent(
      this.dispatchComponentDidMount.bind(this)
    );
    this.wrapper.insertAdjacentHTML("beforeend", this.compiledTemplate);
    this.props.nestedComponents && this.replaceNodesToComponents();
    this.render();
  }

  private reRender(oldNode: HTMLElement) {
    const wrapperId = oldNode.id;
    const parentNode = document.getElementById(wrapperId)?.parentNode;
    parentNode?.replaceChild(this.getNode, oldNode);
  }

  render() {}
}

export default Component;
