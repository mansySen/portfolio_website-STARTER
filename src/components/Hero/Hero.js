import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
      JavaScript is a client-side scripting language that is used to create interactive web pages. It is easy to learn and widely used in web development.
      </SectionText>
      <Button onClick={() =>window.location ='https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;