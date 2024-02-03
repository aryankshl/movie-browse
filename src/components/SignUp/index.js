import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DB from '../../API';

// Components
import Button from './../Common/Button';
// Styles
import { Wrapper, Login } from './SignUp.styles';

const SignUp = ({setUserName}) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("email");

  const [username, setUName] = useState('');
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
        <label>Username</label>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUName(e.target.value)}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text='Sign Up' callback={e => {
          DB.push_login_details(username, email, password).then(
            (v) => {
              if (v.status === 'success') {
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                setUserName(username);
                navigate("/", { reload: true });
              } else {
                setError(v.message);
              }
            },
            (e) => { setError('There was an error!'); console.log(e); }
          );
        }} />
        <Link to='/Login' style={{ textDecoration: 'none' }}>
          <Login>Login</Login>
        </Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Wrapper>
    );
  }
};

export default SignUp;
