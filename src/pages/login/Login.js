import { Form } from 'components/Form';

export const Login = props => (
  <Form
    exclude={['firstname', 'secondname', 'repeat password']}
    submit={props.login}
  />
);
