import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../components/TaskList';
import { Main } from '../partials/main';
import { Login } from './login';
import { Task } from './Task';
// import { NotFound } from './NotFound';
import { UpdateUser } from './UpdateUser';
import { CreateUser } from './CreateUser';
import { Success } from './success';

export const Pages = ({ user, setLoginState }) => {
  if (!user) {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login login={setLoginState} />}
        />
        <Route
          path="/user"
          render={({ history }) => (
            <CreateUser
              user={user}
              setLoginState={setLoginState}
              history={history}
            />
          )}
        />
        <Route path="/success" component={Success} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  const main = () => <Main name={user.firstName} />;

  return (
    <Switch>
      <Route path="/" exact component={main} />
      <Route path="/home" exact component={main} />
      <Route path="/tasks" exact component={TaskList} />
      <Route path="/tasks/:task" component={Task} />
      <Route path="/user" render={() => <UpdateUser user={user} />} />
      <Redirect from="/login" to="/" />
    </Switch>
  );
};
