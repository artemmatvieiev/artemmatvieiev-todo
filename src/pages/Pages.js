import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../components/TaskList';
import { Main } from '../partials/main';
import { Login } from '../pages/login';

export class Pages extends Component {
  constructor(p) {
    super(p);

    this.state = { isLogin: false };
  }

  onLogin = () => {
    this.setState({ isLogin: true });
  }

  render() {
    /* if (!this.state.isLogin) {
      return (
        <Switch>
          <Route
            path="/login"
            render={() => <Login login={this.onLogin} />}
          />
          <Redirect to="/login" />
        </Switch>
      );
    }

 */
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/tasks" component={TaskList} />

        <Redirect from="/login" to="/" />

        <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
      </Switch>
    );
  }
}
