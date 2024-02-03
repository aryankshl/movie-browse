import React from 'react';

//Images
import DatabaseLogo from '../../images/Database-logo.svg';
import MainLogo from '../../images/Main-logo.svg';

//Styles import
import { Wrapper, Content, MainLogoImg, DatabaseLogoImg, MainName } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <MainLogoImg src={MainLogo} alt="tmdb-logo"/>
      <MainName>Movies Review</MainName>
      <DatabaseLogoImg src={DatabaseLogo} alt="rmdb-logo"/>
    </Content>
  </Wrapper>
)

export default Header;
