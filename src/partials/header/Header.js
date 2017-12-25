import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

import './header.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export const Header = ({ user, setLoginState }) => (
  <header className="header">
    <Navigation list={items} />
    {
      user ?
        <div>
          <Link to="/user">Change user</Link>
          <button onClick={() => setLoginState()}>Logout</button>
        </div>
            : <Link to="/register">Register</Link>
    }
  </header>
);
