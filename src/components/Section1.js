import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import womanPool from 'assets/woman_by_pool.png';

const SectionStyle = styled.div`
  height: 80vh;
  background: #d84713;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const slideInDown = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
  
    60% {
      opacity: 1;
      transform: translateY(25px);
    }
  
    75% {
      transform: translateY(-10px);
    }
  
    90% {
      transform: translateY(5px);
    }
  
    to {
      transform: translateY(0);
    }
`;

const ImageBorder = styled.div`
  background: #fff;
  padding: 40px;
  box-shadow: 10px 10px 25px 1px rgba(43, 39, 39, 0.25);
  animation: 1.25s ${slideInDown};
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  animation: 1.25s ${slideInDown};
`;

const Section1 = (props) => {
  const { ...other } = props;
  return (
    <SectionStyle {...other}>
      <GridRow mobile tablet desktop>
        <GridCol mobile={4} tablet={12} desktop={12}>
          <GridRow mobile tablet desktop>
            <GridCol mobile={2} tablet={5} desktop={5} style={{ display: 'grid', alignItems: 'center' }}>
              <div style={{ paddingBottom: '40px' }}>
                <Title as="h1" size="64" color="#fff">
                  Financial protection all in one place
                </Title>
                <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                  Unbiased expert advice to help you make decisions for you or your family that you can feel good about
                </Subtitle>
                <CtaButton>
                  <Title size="18" style={{ paddingRight: 10 }}>
                    Get Started
                  </Title>
                  <ChevronRight />
                </CtaButton>
              </div>
            </GridCol>
            <GridCol mobile={1} tablet={2} desktop={2} />
            <GridCol mobile={1} tablet={5} desktop={5} style={{ marginTop: 50 }}>
              <ImageBorder>
                <ImageStyle src={womanPool} alt="Woman by Pool" />
              </ImageBorder>
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section1;
