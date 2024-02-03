import React from 'react';

//Components
import ContactInfo from './ContactInfo';

//Styles
import { Wrapper, Content } from './ContactUs.styles';

import NoImage from './../../images/no_image.jpg';


const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <ContactInfo
            image={NoImage}
            name='test1'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <ContactInfo
            image={NoImage}
            name='Name'
            rollNo='RollNo'
            Link='Github Link'
            phoneNo='Phone NO'
          />
        </Content>
        <Content>
          <ContactInfo
            image={NoImage}
            name='test3'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <ContactInfo
            image={NoImage}
            name='test4'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
      </Wrapper>
      <Wrapper>
        <Content className='first'>
          <ContactInfo
            image={NoImage}
            name='test5'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <ContactInfo
            image={NoImage}
            name='test6'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content className='last'>
          <ContactInfo
            image={NoImage}
            name='test7'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
      </Wrapper>
    </>
  );
};
export default AboutUs;
