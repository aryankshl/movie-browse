import React from 'react';

//Components
import Profile from './Profile';

//Styles
import { Wrapper } from './AboutUs.styles';

//Images
import NoImage from './../../images/no_image.jpg';
import RaushanImage from '../../images/Raushan-kumar-profile-picture.jpeg';
import AdityaImage from '../../images/Aditya-Yadav-profile-picture.jpg';
import AnimeshImage from '../../images/Animesh-sahu-profile-picture.jpeg';
import SatvikImage from '../../images/Satvik-Dubey-Profile-Picture.jpg';
// import Image from '../../images/';
// // import Image from '../../images/';
// import Image from '../../images/';




const AboutUs = () => {
  return (
    <>
      <Wrapper>
          <Profile
            image={NoImage}
            name='Mani Raj Gupta'
            rollNo='LCS2021037'
            Link='LCS2021037@iiitl.ac.in'
            phoneNo='+91-7004991816'
          />
          <Profile
            image={NoImage}
            name='Samudrala Sharath Chandra'
            rollNo='LCS2021027'
            Link='LCS2021027@iiitl.ac.in'
            phoneNo='+91-9160057443'
          />
          <Profile
            image={RaushanImage}
            name='Raushan kumar'
            rollNo='LCS2021032'
            Link='LCS2021032@iiitl.ac.in'
            phoneNo='+91-9931946374'
          />
          <Profile
            image={AnimeshImage}
            name='Animesh Sahu'
            rollNo='LCS2021035'
            Link='LCS2021035@iiitl.ac.in'
            phoneNo='+91-9165482510'
          />
          <Profile
            image={NoImage}
            name='Abhishek Kumar'
            rollNo='LCS2021036'
            Link='LCS2021036@iiitl.ac.in'
            phoneNo='+91-9335734573'
          />
          <Profile
            image={SatvikImage}
            name='Satvik Dubey'
            rollNo='LCS2021017'
            Link='LCS2021017@iiitl.ac.in'
            phoneNo='+91-9950234151'
          />
          <Profile
            image={AdityaImage}
            name='Aditya Yadav'
            rollNo='LCS2021034'
            Link='LCS2021036@iiitl.ac.in'
            phoneNo='+91-8527475970'
          />
      </Wrapper>
    </>
  );
};
export default AboutUs;
