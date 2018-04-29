import { Navigation } from '../navigation';

import './header.scss';

export const Header = ({ user, setLoginState }) => (
  <header className="page-header">
    <Navigation user={user} setLoginState={setLoginState} />
  </header>
);
