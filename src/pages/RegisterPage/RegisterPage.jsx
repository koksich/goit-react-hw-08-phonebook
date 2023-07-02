import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
        <h2>Registration</h2>
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit ">Register</button>
        </form>
      </div>
    </>
  );
      
};

export default RegisterPage;
