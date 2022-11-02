import CustomHTMLComponent from "../CustomHTMLComponent/CustomHTMLComponent";
import Templator from "../tempator/Templator";

class Component {
  private wrapper: HTMLElement | null;
  private props: any;
  private templator: Templator;
  private compiledTemplate: string;

  constructor(template: string, props: any) {
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

  private _componentDidUpdate(oldProps, newProps) {
    this.createTemplate();
    this._render();
    this.componentDidUpdate(oldProps, newProps);
  }

  componentDidUpdate(oldProps, newProps) {
    console.log(oldProps, newProps);
  }

  private makePropsProxy(props: any) {
    const callCDU = this._componentDidUpdate.bind(this);
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProps = { ...target };
        const newProps = target;
        target[prop] = value;
        callCDU(oldProps, newProps);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  protected replaceNodesToComponents(nestedComponents: {
    [key: string]: Element;
  }) {
    const components = this.wrapper?.querySelectorAll("component");

    components?.forEach((component) => {
      const componentId = component.id;
      const newComponent = nestedComponents[componentId];
      component.replaceWith(newComponent);
    });
  }

  private _render() {
    this.wrapper = new CustomHTMLComponent(
      this.dispatchComponentDidMount.bind(this)
    );
    this.wrapper.insertAdjacentHTML("beforeend", this.compiledTemplate);
    this.render();
  }

  render() {}
}

export default Component;
