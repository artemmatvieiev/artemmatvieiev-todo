import { Form } from 'components/Form';

export const Login = (props) => {
  const login = (data) => {
    console.log(data);
    $.ajax({
      type: 'POST',
      // url: 'http://localhost:8081/public/login',
      url: 'https://jsonplaceholder.typicode.com/users',
      data,
      xhrFields: { withCredentials: true }
    })
      .then(data => props.login(data))
      .catch(console.log);
  };

  return (
    props.isLoading ? <mark>Loading...</mark> :
    <Form
      exclude={['firstname', 'secondname', 'repeat password']}
      submit={login}
    />
  );
};
