import React from 'react';

//Components
import ContactInfo from './ContactInfo';

//Styles
import { Wrapper } from './ContactUs.styles';

import NoImage from './../../images/no_image.jpg';
import RaushanImage from '../../images/Raushan-kumar-profile-picture.jpeg';
import AdityaImage from '../../images/Aditya-Yadav-profile-picture.jpg';
import AnimeshImage from '../../images/Animesh-sahu-profile-picture.jpeg';



const AboutUs = () => {
  return (
    <>
      <Wrapper>
          <ContactInfo
            image={NoImage}
            name='Mani Raj Gupta'
            Github='https://github.com/ManiRajGupta'
            LinkedIn='https://www.linkedin.com/in/mani-raj-gupta-11b329224/'
            email='LCS2021037@iiitl.ac.in'
          />
          <ContactInfo
            image={NoImage}
            name='Samudrala Sharath Chandra'
            Github='https://github.com/sharath-iiitl'
            LinkedIn='https://www.linkedin.com/in/sharath-chandra-4b7023229/'
            email='LCS2021027@iiitl.ac.in'
          />
          <ContactInfo
            image={RaushanImage}
            name='Raushan kumar'
            Github='https://github.com/raushan6760'
            LinkedIn='https://www.linkedin.com/in/raushan-kumar-781a9421a'
            email='LCS2021032@iiitl.ac.in'
          />
          <ContactInfo
            image={AnimeshImage}
            name='Animesh Sahu'
            Github='https://github.com/Animeshz'
            LinkedIn='https://www.linkedin.com/in/animesh-sahu-5a327520b/'
            email='LCS2021035@iiitl.ac.in'
          />
          <ContactInfo
            image={NoImage}
            name='Abhishek Kumar'
            Github='https://github.com/ABDcan'
            LinkedIn='https://www.linkedin.com/in/abhishek-kumar-8a99a6228/'
            email='LCS2021036@iiitl.ac.in'
          />
          <ContactInfo
            image={NoImage}
            name=''
            Github=''
            LinkedIn=''
            email=''
          />
          <ContactInfo
            image={AdityaImage}
            name='Aditya Yadav'
            Github='https://github.com/aadi58002'
            LinkedIn='https://www.linkedin.com/in/aditya-yadav-a510511a2/'
            email='LCS2021034@iiitl.ac.in'
          />
      </Wrapper>
    </>
  );
};
export default AboutUs;
