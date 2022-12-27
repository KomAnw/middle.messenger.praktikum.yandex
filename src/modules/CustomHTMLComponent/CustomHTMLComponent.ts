class CustomHTMLComponent extends HTMLElement {
  componentDidMount: Function;
  componentWillUnmount: Function;

  constructor(componentDidMount: Function, componentWillUnmount: Function) {
    super();
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
  }

  connectedCallback() {
    this.componentDidMount();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }
}

export default CustomHTMLComponent;

customElements.get("custom-component") ||
  customElements.define("custom-component", CustomHTMLComponent);
