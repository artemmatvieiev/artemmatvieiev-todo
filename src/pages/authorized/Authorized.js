import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from 'partials/main';
import { TaskList } from '../TaskList';
import { Task } from '../Task';
// import { NotFound } from './NotFound';
import { UpdateUser } from '../UpdateUser';

export const Authorized = ({ user }) => {
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
