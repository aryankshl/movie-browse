import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Images
import DatabaseLogo from '../../../images/Database-logo.svg';
import MainLogo from '../../../images/Main-logo.svg';

//Styles import
import { Wrapper, Content, MainLogoImg, DatabaseLogoImg, MainName } from './Header.styles';
//Context
import { Context } from './../../../context';

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);
  return (
  <Wrapper>
    <Content>
      <Link to='/'>
        <MainLogoImg src={MainLogo} alt="tmdb-logo" />
      </Link>
      <MainName>Movies Review</MainName>
      <Link to='/Login' style={{ textDecoration: 'none' }}>
        <p className='Login'>Login</p>
      </Link>
      <DatabaseLogoImg src={DatabaseLogo} alt="rmdb-logo" />
    </Content>
  </Wrapper>
  );
}

export default Header;
