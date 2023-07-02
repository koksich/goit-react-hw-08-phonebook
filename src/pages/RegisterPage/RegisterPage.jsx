import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Btn, Form, Input, Label, Title } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
      </Helmet>
      <div>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
          <Label htmlFor="email">Email</Label>

          <Input
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={handleChange}
          />
          <Label htmlFor="password">Password</Label>

          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Btn type="submit ">Register</Btn>
        </Form>
      </div>
    </>
  );
      
};

export default RegisterPage;
