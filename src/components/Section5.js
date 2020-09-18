import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import PhoneMockup from 'assets/Phone_Mockup.png';
import pool from 'assets/pool.png';

const slideInRight = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
  
    60% {
      opacity: 1;
      transform: translateX(25px);
    }
  
    75% {
      transform: translateX(-10px);
    }
  
    90% {
      transform: translateX(5px);
    }
  
    to {
      transform: translateX(0);
    }
`;

const SectionStyle = styled.div`
  height: 750px;
  margin-top: 200px;
  margin-bottom: 50px;
`;

const SectionBg = styled.div`
  background: #215370;
  height: 100%;
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -100px;
  left: 100px;
  background: #fff;
  padding: 40px;
  width: 400px;
  height: 400px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  border: 1px solid #ede8e5;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PhoneImageBorder = styled.div`
  position: absolute;
  height: 700px;
  border-radius: 5px;
  z-index: 1000;
`;

const Section5 = (props) => {
  const { ...other } = props;

  return (
    <SectionStyle {...other} style={{ position: 'relative' }}>
      <PhoneImageBorder style={{ top: 50, left: 650, overflow: 'hidden' }}>
        <ImageStyle src={PhoneMockup} alt="Quote mockup" />
      </PhoneImageBorder>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 0 0 30px', maxWidth: 'none' }}>
        <GridCol mobile={1} tablet={2} desktop={2} style={{ position: 'relative' }}>
          <ImageBorder>
            <ImageStyle src={pool} alt="Side of building" />
          </ImageBorder>
        </GridCol>
        <GridCol mobile={1} tablet={2} desktop={10}>
          <SectionBg>
            <GridRow desktop={10}>
              <GridCol desktop={5}></GridCol>
              <GridCol mobile={3} tablet={10} desktop={5}>
                <GridRow desktop={5}>
                  <GridCol mobile={2} tablet={5} desktop={6} />
                  <GridCol
                    mobile={2}
                    tablet={5}
                    desktop={4}
                    style={{ display: 'grid', alignItems: 'center', height: '700px' }}
                  >
                    <div>
                      <Title as="h1" size="64" color="#fff">
                        Let us take the lead
                      </Title>
                      <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                        That means we, offer all the top insurance companies so you don’t have to shop elsewhere, we
                        explain what you need to know in plain English bringing the research to you.
                      </Subtitle>
                      <CtaButton>
                        <Title size="15" style={{ paddingRight: 3 }}>
                          Learn More About Us
                        </Title>
                        <ChevronRight />
                      </CtaButton>
                    </div>
                  </GridCol>
                </GridRow>
              </GridCol>
            </GridRow>
          </SectionBg>
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section5;
