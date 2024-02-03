import React from 'react';

//Components
import Profile from './Profile';

//Styles
import { Wrapper, Content } from './AboutUs.styles';

import NoImage from './../../images/no_image.jpg';


const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Profile
            image={NoImage}
            name='test1'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <Profile
            image={NoImage}
            name='Name'
            rollNo='RollNo'
            Link='Github Link'
            phoneNo='Phone NO'
          />
        </Content>
        <Content>
          <Profile
            image={NoImage}
            name='test3'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <Profile
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
          <Profile
            image={NoImage}
            name='test5'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content>
          <Profile
            image={NoImage}
            name='test6'
            rollNo='30'
            Link='test.com'
            phoneNo='test-900'
          />
        </Content>
        <Content className='last'>
          <Profile
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
