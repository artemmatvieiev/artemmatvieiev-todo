import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../components/TaskList';
import { Main } from '../partials/main';
import { Login } from '../pages/login';
import { Task } from '../pages/Task';

export class Pages extends Component {
  constructor(p) {
    super(p);

    this.state = { isLoading: false };
  }

  onLogin = (data) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.setLoginState(data);
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    if (!this.props.login) {
      return (
        <Switch>
          <Route
            path="/login"
            render={() => <Login login={this.onLogin} isLoading={this.state.isLoading} />}
          />
          <Redirect to="/login" />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/tasks" exact component={TaskList} />
        <Route path="/tasks/:task" component={Task} />
        <Redirect from="/login" to="/" />
      </Switch>
    );
  }
}
