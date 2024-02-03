import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

//styles
import { Wrapper, Content, Image, vertical_margin } from './Profile.styles';

const Profile = ({ name, rollNo, Link, phoneNo, image }) => (
  <Wrapper>
    <Image src={image} alt="Profile Picture"/>
    <Content>{name} ({rollNo})</Content>
    <Content>
      <a href={"mailto:" + Link} style={vertical_margin}><FontAwesomeIcon icon={faEnvelope} /></a>
      <a href={"tel:" + phoneNo} style={vertical_margin}><FontAwesomeIcon icon={faPhone} /></a>
    </Content>
  </Wrapper>
);

export default Profile;
