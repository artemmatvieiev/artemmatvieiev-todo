import { Form } from 'components/Form';
import { create } from 'services/userService';

export const CreateUser = (props) => {
  const userHandler = (data) => {
    create(data).then((user) => {
      props.setLoginState(user);
      props.history.push('/success');
    });
  };

  return (
    <Form
      disabled={props.user ? ['email'] : []}
      submit={userHandler}
      data={props.user}
    />
  );
};
