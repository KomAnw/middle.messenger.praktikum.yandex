import './App.scss';
import {ChatComponent} from '../Chat';
import {
  ChangebleProfile,
  ChangeProfilePassword,
  CommonProfile,
} from 'src/pages/Profile';
import {ClientError} from 'src/pages/404';
import {ServerError} from 'src/pages/500';
import Login from 'src/pages/Login/Login';
import Registration from 'src/pages/Registration/Registration';

class Application {
  private root: HTMLElement;

  constructor(rootTag: string) {
    this.root = document.querySelector(rootTag)!;
    this.listenApp();
  }

  public bootstrap() {
    this.renderComponentByLocation();
  }

  private renderComponentByLocation() {
    this.root.firstChild && this.root.removeChild(this.root.firstChild);
    switch (window.location.pathname) {
      case '/login':
        this.renderIntoRoot(Login());
        break;
      case '/registration':
        this.renderIntoRoot(Registration());
        break;
      case '/404':
        this.renderIntoRoot(ClientError);
        break;
      case '/500':
        this.renderIntoRoot(ServerError);
        break;
      case '/profile':
        this.renderIntoRoot(CommonProfile);
        break;
      case '/change-profile-data':
        this.renderIntoRoot(ChangebleProfile);
        break;
      case '/change-password':
        this.renderIntoRoot(ChangeProfilePassword);
        break;
      case '/chat':
        this.renderIntoRoot(ChatComponent);
        break;
      default:
        this.renderIntoRoot(Login());
        break;
    }
  }

  private renderIntoRoot(tempate: HTMLElement) {
    this.root.appendChild(tempate);
  }

  private listenApp() {
    const callMethod = () => this.renderComponentByLocation();
    const pushState = history.pushState;
    history.pushState = function() {
      // @ts-expect-error
      pushState.apply(history, arguments);
      callMethod();
    };
  }
}

const App = new Application('#root');
Object.freeze(App);
export default App;
