import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Btn, Form, Input, Label, Title } from './LoginPage.styled';

const LogInPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Helmet>
        <title>LogInPage</title>
      </Helmet>
      <Title>Please, Log In </Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
          autocomplete="off"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          autocomplete="off"
        />
        <Btn type="submit ">Log in</Btn>
      </Form>
    </>
  );
};

export default LogInPage;
