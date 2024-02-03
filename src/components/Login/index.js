import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Button from './../Common/Button';
// Styles
import { Wrapper, SignUp } from './Login.styles';

const Login = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <br /><br /><br />
      {/* error && <div className='error'>There was an error!</div> */}
      <label>Username</label>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Password</label>
      <input
        type='password'
        placeholder='PassWord'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text='Login' />
      {/* <Button text='Login' callback="Function that handles the submittion" /> */}
      <Link to='/SignUp' style={{ textDecoration: 'none' }}>
        <SignUp>Sign up</SignUp>
      </Link>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Wrapper>
  );
};

export default Login;
