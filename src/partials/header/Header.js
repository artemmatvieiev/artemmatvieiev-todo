import { Link } from 'react-router-dom';
import { logout } from 'services/userService';
import { Navigation } from '../navigation';

import './header.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export const Header = ({ user, setLoginState }) => {
  const onLogout = () => {
    logout()
      .then(() => setLoginState(false))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  };

  return (
    <header className="header">
      <Navigation list={items} user={user} />
      {
        user &&
          <div>
            <Link to="/user" className="user-change">Change user</Link>
            <a onClick={onLogout}>Logout</a>
          </div>
      }
    </header>
  );
}
