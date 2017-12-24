import { Navigation } from '../navigation';

import './header.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export const Header = ({ login, setLoginState }) => (
  <header className="header">
    <Navigation list={items} />
    {login && <button onClick={() => setLoginState()}>Logout</button>}
  </header>
);
