import { Authorized } from './authorized';
import { NotAuthorized } from './notAuthorized';

export const Pages = ({ user, setLoginState }) => (
  !user
    ? <NotAuthorized user={user} setLoginState={setLoginState} />
    : <Authorized user={user} />
);
