import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { checkUser } from 'services/userService';
import { setUser } from 'store';

import { Loader } from 'components/Loader';
import { Header } from './partials/header';
import { Pages } from './pages';
import { Footer } from './partials/footer';

import './app.scss';

export class AppComponent extends Component {
  componentDidMount() {
    checkUser()
      .then(user => this.setLoginState(user))
      .catch(() => this.setLoginState(false));
  }

  setLoginState = (user) => {
    this.props.setUser(user);
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />
        <main className="page-main">
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

const mapState = ({ user }) => ({
  user
});

const mapDispatch = dispatch => ({
  setUser(user) {
    dispatch(setUser(user));
  }
});

export const App = withRouter(connect(mapState, mapDispatch)(AppComponent));
