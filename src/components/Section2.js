import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Text } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import buildingSide from 'assets/building_side.png';
import Step, { StepNumber } from './Step';

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
  margin-top: 150px;
  margin-bottom: 50px;
`;

const SectionBg = styled.div`
  background: #ed772f;
  padding-top: 100px;
  height: 100%;
`;

const ImageBorder = styled.div`
  position: absolute;
  top: 75px;
  left: -200px;
  width: 545px;
  height: 471px;
  box-shadow: 10px 10px 25px 1px rgba(43, 39, 39, 0.25);
  animation: 1.25s ${slideInRight};
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StepAbsolute = styled(Step)`
  position: absolute;
  ${({ top }) => `top: ${top}px;`}
  ${({ left }) => `left: ${left}px;`}
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
          <StepAbsolute top={200} left={-100}>
            <StepNumber>1</StepNumber>
            <div>
              <Title size="20">Learn</Title>
              <Text size="16">Unbiased expert advice from licensed non commissioned agents</Text>
            </div>
          </StepAbsolute>
          <StepAbsolute top={350} left={0}>
            <StepNumber>2</StepNumber>
            <div>
              <Title size="20">Compare Our Marketplace</Title>
              <Text size="16">Unbiased expert advice from licensed non commissioned agents</Text>
            </div>
          </StepAbsolute>
          <StepAbsolute top={500} left={100}>
            <StepNumber>3</StepNumber>
            <div>
              <Title size="20">Apply Through Policygenius</Title>
              <Text size="16">Apply through us and let our licensed advisors handle the rest. </Text>
            </div>
          </StepAbsolute>
          <SectionBg>
            <GridRow mobile tablet desktop={10}>
              <GridCol mobile={2} tablet={5} desktop={4} />
              <GridCol mobile={2} tablet={5} desktop={5}>
                <div style={{ paddingTop: '50px' }}>
                  <Title as="h1" size="64" color="#fff">
                    Save time & money
                  </Title>
                  <Text as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                    Unbiased expert advice to help you make decisions for you or your family that you can feel good
                    about
                  </Text>
                  <CtaButton>
                    <Title size="18" style={{ paddingRight: 10 }}>
                      Get Started
                    </Title>
                    <ChevronRight />
                  </CtaButton>
                </div>
              </GridCol>
              <GridCol mobile={2} tablet={5} desktop={1} />
            </GridRow>
          </SectionBg>
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section2;
