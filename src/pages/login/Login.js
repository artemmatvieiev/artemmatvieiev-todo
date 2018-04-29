import { Loader } from 'components/Loader';
import { Form } from 'components/Form';
import { login } from 'services/userService';

export const Login = (props) => {
  const loginUser = (data) => {
    login(data)
      .then(data => props.login(data))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  };

  return (
    props.isLoading ? <Loader /> :
    <Form
      exclude={['firstName', 'lastName', 'repeat password']}
      submit={loginUser}
      data={props.user}
    />
  );
};
