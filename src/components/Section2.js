import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Text } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import buildingSide from 'assets/building_side.png';

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
  height: 615px;
`;

const SectionBg = styled.div`
  background: #ed772f;
  padding-top: 30px;
  height: 100%;
`;

const ImageBorder = styled.div`
  position: absolute;
  top: 50px;
  left: -100px;
  width: 545px;
  height: 471px;
  box-shadow: 10px 10px 25px 1px rgba(43, 39, 39, 0.25);
  animation: 1.25s ${slideInRight};
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Section2 = (props) => {
  const { ...other } = props;
  return (
    <SectionStyle {...other}>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 0 0 30px', maxWidth: 'none' }}>
        <GridCol mobile={1} tablet={2} desktop={2}></GridCol>
        <GridCol mobile={3} tablet={10} desktop={10} style={{ position: 'relative' }}>
          <ImageBorder>
            <ImageStyle src={buildingSide} alt="Side of building" />
          </ImageBorder>
          <SectionBg>
            <GridRow mobile tablet desktop>
              <GridCol mobile={2} tablet={5} desktop={5} />
              <GridCol mobile={2} tablet={5} desktop={5}>
                <Title as="h1" size="64" color="#fff" style={{ margin: '12px 0' }}>
                  Save time & money
                </Title>
                <Text as="h2" size="18" color="#fff" style={{ margin: '12px 0' }}>
                  Unbiased expert advice to help you make decisions for you or your family that you can feel good about
                </Text>
                <CtaButton>
                  <Text>Get Started</Text>
                  <ChevronRight />
                </CtaButton>
              </GridCol>
            </GridRow>
          </SectionBg>
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section2;
