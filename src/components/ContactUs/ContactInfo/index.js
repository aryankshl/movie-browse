import React from 'react';

//styles
import { Wrapper, Content, Image } from './ContactInfo.styles';
import NoImage from './../../../images/no_image.jpg';


const Profile = ({ name, Github, email, LinkedIn, image }) => (
  <Wrapper>
    <Image src={image} alt="Profile Picture"/>
    <Content>{name}</Content>
    <Content>Github Link: <a href={Github}>{Github}</a></Content>
    <Content>Linked In: <a href={LinkedIn}>{LinkedIn}</a></Content>
    <Content>Gmail: <a href={email}>{email}</a></Content>
  </Wrapper>
);

export default Profile;
