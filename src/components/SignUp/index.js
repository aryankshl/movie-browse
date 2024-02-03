import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Button from './../Common/Button';
// Styles
import { Wrapper, Login } from './SignUp.styles';

const SignUp = () => {


  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <br /><br /><br />
      {/* error && <div className='error'>There was an error!</div> */}
      <label>Username</label>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange="Function that handles the input"
      />
      <label>Email</label>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange="Function that handles the input"
      />
      <label>Password</label>
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange="Functions that handles the input"
      />
      <Button text='Sign Up' />
      {/* <Button text='Sign Up' callback="Function that handles the submittion" /> */}
      <Link to='/Login' style={{ textDecoration: 'none' }}>
        <Login>Login</Login>
      </Link>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Wrapper>
  );
};

export default SignUp;
