import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../login';
import { CreateUser } from '../CreateUser';
import { Success } from '../success';

export const NotAuthorized = ({ user, setLoginState }) => (
  <Switch>
    <Route
      path="/login"
      render={() => <Login login={setLoginState} />}
    />
    <Route
      path="/register"
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
