import React from "react";

//Components
// import Profile from "./Profile";

//Styles
import {
  CenteredHeader,
  Heading,
  Description,
} from "./AboutUs.styles";

//Images
// import NoImage from "./../../images/no_image.jpg";
// // import Image from '../../images/';
// import Image from '../../images/';

const AboutUs = () => {
  return (
    <>
      <CenteredHeader>
        <Heading>About Us</Heading>
        <Description>
          Hello! I am Aryan Kaushal.
          <br />
          This is my End Semester Project, where I have designed a Movie
          Browse Website using React.
        </Description>
      </CenteredHeader>
      {/* <Wrapper>
        <Profile
          image={Aryan Image}
          name="Aryan Kaushal"
          rollNo="LIT2021037"
          eMail="LIT2021037@iiitl.ac.in"
          linkedIn="https://www.linkedin.com/in/aryankshl/"
          phoneNo="+91-7348350683"
        />
      </Wrapper> */}
    </>
  );
};
export default AboutUs;
