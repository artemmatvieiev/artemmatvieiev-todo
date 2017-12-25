import { Header } from './partials/header';
import { Pages } from './pages';
import { Footer } from './partials/footer';

import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false
    };
  }

  setLoginState = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="mainWrapper">
        <div className="mainContent">
          <Header
            user={user}
            setLoginState={this.setLoginState}
          />
          <Pages
            user={user}
            setLoginState={this.setLoginState}
          />
        </div>

        <Footer />
      </div>
    );
  }
}
