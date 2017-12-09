import { Navigation } from '../navigation';

import './header.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export const Header = () => (
  <header className="header">
    <Navigation list={items} />
  </header>
);
