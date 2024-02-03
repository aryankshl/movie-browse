import React from 'react';

//styles
import { Wrapper, Content, Image } from './ContactInfo.styles';

const Profile = ({ name, Github, email, LinkedIn, image }) => (
  <Wrapper>
    <Image src={image} alt="Profile Picture"/>
    <Content>{name}</Content>
    <Content>Github Link: <a href={Github}>{Github}</a></Content>
    <Content>Linked In: <a href={LinkedIn}>{LinkedIn}</a></Content>
    <Content>Gmail: {email}</Content>
  </Wrapper>
);

export default Profile;
