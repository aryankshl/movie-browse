import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content } from './Footer.styles';

const Footer = () => (
  <Wrapper>
    <Content>
      <Link to='/AboutUs' style={{ textDecoration: 'none' }}>
        <p>About Us</p>
      </Link>
      <Link to='/ContactUs' style={{ textDecoration: 'none' }}>
        <p>Contact Us</p>
      </Link>
      <Link to='/Login' style={{ textDecoration: 'none' }}>
        <p>Login</p>
      </Link>
    </Content>
  </Wrapper>
);

export default Footer;
