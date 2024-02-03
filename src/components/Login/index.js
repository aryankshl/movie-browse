import React from 'react';
// Components
import Button from './../Common/Button';
// Styles
import { Wrapper } from './Login.styles';

const Login = () => {
  return (
    <Wrapper>
      <br/><br/><br/>
      {/* error && <div className='error'>There was an error!</div> */}
      <label>Username:</label>
      <input
        type='text'
        value="username"
        name='username'
        onChange="Function that handles the input"
      />
      <input
        type='password'
        value="password"
        name='password'
        onChange="Functions that handles the input"
      />
      <Button text='Login' callback="Function that handles the submittion" />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Wrapper>
  );
};

export default Login;
