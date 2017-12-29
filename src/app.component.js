import { checkUser } from 'services/userService';
import { Loader } from 'components/Loader';
import { Header } from './partials/header';
import { Pages } from './pages';
import { Footer } from './partials/footer';

import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ user }))
      .catch(() => this.setLoginState(false));
  }

  setLoginState = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />
        <main className="main">
          {
            user !== null ?
              <Pages
                user={user}
                setLoginState={this.setLoginState}
              /> : <Loader />
          }
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
