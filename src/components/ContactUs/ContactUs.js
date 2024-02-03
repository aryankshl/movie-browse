import React from 'react';

//Styles
import { CenteredContent, Description, Form, Heading, MediaIcons, Wrapper } from './ContactUs.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
    <>
      <CenteredContent>
        <Heading>
          Contact Us
        </Heading>
        <Description>
          Leave us a mail, we'll be right back!
        </Description>
        <Form>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Subject"></input>
          <input type="textarea" placeholder="Content"></input>
          <button formAction='submit'>Submit</button>
        </Form>
      </CenteredContent>
      <CenteredContent>
        <br/>
        <Description>
          Connect with us on any of the social network below!
        </Description>
        <MediaIcons>
          <a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </MediaIcons>
      </CenteredContent>
    </>
  );
};
export default AboutUs;
