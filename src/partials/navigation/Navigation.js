import { NavLink } from 'react-router-dom';
import './navigation.scss';

const items = [
  { label: 'Home', id: 'asfd445asdf' },
  { label: 'Tasks', id: 'dfsdf54d5sfd' }
];

export const Navigation = () => (
  <nav className="main-nav">
    <ul>
      {
        items.map(item => (
          <li
            key={item.id}
            className="item"
          >
            <NavLink
              to={`/${item.label.toLowerCase()}`}
              activeClassName="active"
            >
              {item.label}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
);
