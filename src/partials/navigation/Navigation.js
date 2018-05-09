import { NavLink, Link } from 'react-router-dom';
import { logout } from 'services/userService';
import './navigation.scss';

const items = [
  { label: 'Home', id: 'asfd445asdf' },
  { label: 'Tasks', id: 'dfsdf54d5sfd', auth: true },
  { label: 'Register', id: 'dfs6654d5sfd', nonauth: true }
];

export const Navigation = (props) => {
  const onLogout = () => {
    const { setLoginState } = props;
    logout()
      .then(() => setLoginState(false))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  };

  const { user } = props;
  let filtredItems = items.filter(item => !item.auth);

  if (user) {
    filtredItems = items.filter(item => !item.nonauth);
  }

  return (
    <nav className="main-nav">
      <ul className="site-list">
        <li className="main-logo">
          <Link to="/">
            <img src="./assets/images/logo.png" width="50" alt="logo" />
          </Link>
        </li>
        {
          filtredItems
            .map(item => (
              <li
                key={item.id}
                className="site-list-item"
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

      {
        user &&
        <div className="user">
          <p className="user-name">{user.firstName}</p>
          <ul className="user-list">
            <li className="user-list-item">
              <Link to="/user">Change user</Link>
            </li >
            <li className="user-list-item">
              <button className="user-logout" onClick={onLogout}>Logout</button>
            </li>
          </ul>
        </div>
      }

    </nav>
  );
};
