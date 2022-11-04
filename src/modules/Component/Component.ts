import CustomHTMLComponent from '../CustomHTMLComponent/CustomHTMLComponent';
import Templator from '../tempator/Templator';

class Component {
  private wrapper: HTMLElement | null;
  private props: any;
  private templator: Templator;
  private compiledTemplate: string;

  constructor(template: string, props: any) {
    this.props = this.makePropsProxy(props);
    this.compiledTemplate = '';
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

  componentDidUpdate(oldProps, newProps) {}

  private makePropsProxy(props: any) {
    const callCDU = this._componentDidUpdate.bind(this);
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProps = {...target};
        const newProps = target;
        target[prop] = value;
        callCDU(oldProps, newProps);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  watchChanges() {
    const callback = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        const {oldValue, target, type} = mutation;
        const isInput = target.nodeName === 'INPUT';
        const isAttributeChanged = type === 'attributes';
        isAttributeChanged &&
          isInput &&
          this.componentDidUpdate(oldValue, (target as HTMLInputElement).value);
      }
    };

    const observer = new MutationObserver(callback);
    this.wrapper &&
      observer.observe(this.wrapper, {
        attributes: true,
        subtree: true,
        attributeOldValue: true,
      });
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private replaceNodesToComponents() {
    const components = this.wrapper?.querySelectorAll('component');

    components?.forEach((customComponent) => {
      const componentId = customComponent.id;
      const component = this.props.nestedComponents[componentId];
      if (component instanceof DocumentFragment) {
        customComponent.replaceWith(component);
      } else {
        const newComponent = this.props.nestedComponents[componentId].getNode;
        customComponent.replaceWith(newComponent);
      }
    });
  }

  private _render() {
    this.wrapper = new CustomHTMLComponent(
        this.dispatchComponentDidMount.bind(this)
    );
    this.wrapper.insertAdjacentHTML('beforeend', this.compiledTemplate);
    this.props.nestedComponents && this.replaceNodesToComponents();
    this.watchChanges();
    this.render();
  }

  render() {}
}

export default Component;
