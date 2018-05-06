import { Link } from 'react-router-dom';
import { login } from 'services/userService';

import './success.scss';

export const Success = (props) => {
  login(props.user)
    .then(data => props.login(data))
    /* eslint no-console: ["error", { allow: ["log"] }] */
    .catch(console.log);

  return (
    <section className="success">
      <p>Account was successfully created.</p>
      <Link to="/">Go to main page</Link>
    </section>
  );
};
