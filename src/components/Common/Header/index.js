import React from 'react';
import { Link } from 'react-router-dom';

//Images
import MainLogo from '../../../images/Main-logo.svg';
import DatabaseLogo from '../../../images/Database-logo.svg';

//Styles import
import { Wrapper, Content, MainLogoImg, DatabaseLogoImg, MainName } from './Header.styles';

const Header = ({username, setUserName}) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <MainLogoImg src={MainLogo} alt="tmdb-logo" />
        </Link>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <MainName>Movies Review</MainName>
        </Link>
        <p className='Login'>
          {username ?
            <Link to='/' onClick={() => { delete localStorage.email; delete localStorage.username; setUserName(''); }} style={{ textDecoration: 'none' }}>{username} - Logout</Link> :
            <Link to='/Login' style={{ textDecoration: 'none' }}>Login</Link>
          }
        </p>
        <DatabaseLogoImg src={DatabaseLogo} alt="rmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
