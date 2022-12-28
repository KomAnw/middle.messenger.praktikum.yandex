import './App.scss';
import Router from 'src/modules/Router/Router';
import {Sections} from 'src/modules/Router/types';

class Application {
  private root: HTMLElement;
  private popup: HTMLElement;

  constructor(rootTag: string) {
    this.root = document.querySelector(rootTag)!;
    this.popup = document.getElementById('popup')!;
    const renderIntoRoot = this.renderIntoRoot.bind(this);
    new Router(renderIntoRoot).start();
  }

  public renderPopup = (node: HTMLElement) => {
    this.popup.append(node);
  };

  private async renderIntoRoot(section: Sections) {
    this.removeFromRoot();
    this.root.appendChild(await section());
  }

  private removeFromRoot() {
    this.root.firstChild?.remove();
  }
}

const App = new Application('#root');
Object.freeze(App);
export default App;
