import "./App.scss";
import Router from "src/modules/Router/Router";
import { Sections } from "src/modules/Router/types";

class Application {
  private root: HTMLElement;

  constructor(rootTag: string) {
    this.root = document.querySelector(rootTag)!;
    const renderIntoRoot = this.renderIntoRoot.bind(this);
    new Router(renderIntoRoot).start();
  }

  private renderIntoRoot(section: Sections) {
    this.removeFromRoot();
    this.root.appendChild(section());
  }

  private removeFromRoot() {
    this.root.firstChild?.remove();
  }
}

const App = new Application("#root");
Object.freeze(App);
export default App;
