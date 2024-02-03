import React from 'react';

//styles
import { Wrapper, Content, Image } from './Profile.styles';
import NoImage from './../../../images/no_image.jpg';


const Profile = ({ name, rollNo, Link, phoneNo, image }) => (
  <Wrapper>
    <Image src={image} alt="Profile Picture"/>
    <Content>{name}</Content>
    <Content>{rollNo}</Content>
    <Content><a href={Link}>Github Link</a></Content>
    <Content>{phoneNo}</Content>
  </Wrapper>
);

export default Profile;
