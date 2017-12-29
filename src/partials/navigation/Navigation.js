import { NavLink } from 'react-router-dom';
import './navigation.scss';

const items = [
  { label: 'Home', id: 'asfd445asdf' },
  { label: 'Tasks', id: 'dfsdf54d5sfd', auth: true },
  { label: 'User', id: 'dfs6654d5sfd', nonauth: true }
];

export const Navigation = ({ user }) => {
  let filtredItems = items.filter(item => !item.auth);

  if (user) {
    filtredItems = items.filter(item => !item.nonauth);
  }

  return (
    <nav className="main-nav">
      <ul>
        {
          filtredItems
            .map(item => (
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
}
