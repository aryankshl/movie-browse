import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DB from '../../API';

// Components
import Button from './../Common/Button';
// Styles
import { Wrapper, SignUp } from './Login.styles';

const Login = ({setUserName}) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("email");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  if (login) {
    return <Navigate to='/' />;
  } else {
    return (
      <Wrapper>
        <br /><br /><br />
        {error && <div className='error'>{error}</div>}
        <label>Email</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='PassWord'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text='Login' callback={e => {
          DB.match_login_details(email, password).then(
            (v) => {
              if (v.status === 'success') {
                localStorage.setItem("username", v.username);
                localStorage.setItem("email", email);
                setUserName(v.username);
                navigate("/");
              } else {
                setError(v.message);
              }
            },
            (e) => { setError('There was an error!'); console.log(e); }
          );
        }} />
        <Link to='/SignUp' style={{ textDecoration: 'none' }}>
          <SignUp>Sign up</SignUp>
        </Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Wrapper>
    );
  }
};

export default Login;
