import { NavLink, Link } from 'react-router-dom';
import { logout } from 'services/userService';
import './navigation.scss';

const items = [
  { label: 'Home', id: 'asfd445asdf' },
  { label: 'Tasks', id: 'dfsdf54d5sfd', auth: true },
  { label: 'Register', id: 'dfs6654d5sfd', nonauth: true }
];

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { addClassActive: false };
  }
  clickHandler = () => {
    const value = this.state.addClassActive;
    this.setState({ addClassActive: !value });
  }
  onLogout = () => {
    const { setLoginState } = this.props;
    logout()
      .then(() => setLoginState(false))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  };

  render() {
    const { user } = this.props;
    const { addClassActive } = this.state;
    let filtredItems = items.filter(item => !item.auth);

    if (user) {
      filtredItems = items.filter(item => !item.nonauth);
    }

    return (
      <nav className="main-nav">
        <ul className="site-list">
          <li className="main-logo">
            <Link to="/">
              <img src="./images/logo.png" width="50" alt="logo" />
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
              <p className="user-name" onClick={this.clickHandler}>{user.firstName}</p>
              <ul onMouseLeave={this.clickHandler} className={`user-list ${(addClassActive && 'active') || ''}`}>
                <li>
                  <Link
                    to="/user"
                    className="user-list-item"
                  >
                    Change user
                  </Link>
                </li>
                <li><button className="user-list-item user-logout" onClick={this.onLogout}>Logout</button></li>
              </ul>
            </div>
        }
      </nav>
    );
  }
}
