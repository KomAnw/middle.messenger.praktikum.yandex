class CustomHTML extends HTMLElement {
  markup;
  callback;

  constructor(markup: any, callback: any) {
    super();
    this.markup = markup;
    this.callback = callback;
    this.render();
  }

  connectedCallback() {
    document.body.contains(this.markup) && this.callback(this.markup);
  }

  render() {
    return this.appendChild(this.markup);
  }
}

export default CustomHTML;

customElements.get("custom-component") || customElements.define("custom-component", CustomHTML);
