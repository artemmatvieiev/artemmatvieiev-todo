import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from 'partials/main';
import { TaskList } from '../TaskList';
import { Task } from '../Task';
import { NotFound } from '../NotFound';
import { UpdateUser } from '../UpdateUser';
import { Success } from '../success';

export const Authorized = ({ user }) => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskList} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/user" render={() => <UpdateUser user={user} />} />
    <Route path="/success" render={() => <Success user={user} />} />
    <Redirect from="/login" to="/" />
    <Route component={NotFound} />
  </Switch>
);
