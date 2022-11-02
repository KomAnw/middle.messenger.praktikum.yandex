class CustomHTMLComponent extends HTMLElement {
  callback: Function;

  constructor(callback: Function) {
    super();
    this.callback = callback;
  }
  connectedCallback() {
    this.callback();
  }
}

export default CustomHTMLComponent;

customElements.get("custom-component") ||
  customElements.define("custom-component", CustomHTMLComponent);
