import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight } from 'icons';
import buildingSide from 'assets/building_side.png';
import Step, { StepNumber } from 'components/Step';
import useIsVisible from 'hooks/useIsVisible';

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

const skew = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform-origin: top;
      transform: rotateX(75deg) rotateY(10deg) rotateZ(-9deg);
    }
  
    60% {
      opacity: 1;
    }

    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    }
`;

const SectionStyle = styled.div`
  height: 500px;
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
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;

      animation: 1.25s ${slideInRight} backwards;
    `};

  ${({ delay }) => `animation-delay: ${delay}s;`}
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StepAbsolute = styled(Step)`
  position: absolute;
  ${({ top }) => `top: ${top}px;`}
  ${({ left }) => `left: ${left}px;`}
    opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      animation: 1.25s ${skew} backwards;
    `};

  ${({ delay }) => `animation-delay: ${delay}s;`}
`;

const Section2 = (props) => {
  const { ...other } = props;
  const rootRef = useRef(null);
  const isVisible = useIsVisible(rootRef);

  return (
    <SectionStyle {...other} ref={rootRef}>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 0 0 30px', maxWidth: 'none' }}>
        <GridCol mobile={1} tablet={2} desktop={2}></GridCol>
        <GridCol mobile={3} tablet={10} desktop={10} style={{ position: 'relative' }}>
          <ImageBorder isVisible={isVisible} delay={0.2}>
            <ImageStyle src={buildingSide} alt="Side of building" />
          </ImageBorder>
          <StepAbsolute top={200} left={-100} isVisible={isVisible} delay={0.4}>
            <StepNumber>1</StepNumber>
            <div>
              <Title size="19">Learn</Title>
              <Subtitle size="13" style={{ paddingTop: 5 }}>
                Unbiased expert advice from licensed non commissioned agents
              </Subtitle>
            </div>
          </StepAbsolute>
          <StepAbsolute top={350} left={0} isVisible={isVisible} delay={0.6}>
            <StepNumber>2</StepNumber>
            <div>
              <Title size="19">Compare Our Marketplace</Title>
              <Subtitle size="13" style={{ paddingTop: 5 }}>
                Unbiased expert advice from licensed non commissioned agents
              </Subtitle>
            </div>
          </StepAbsolute>
          <StepAbsolute top={500} left={100} isVisible={isVisible} delay={0.8}>
            <StepNumber>3</StepNumber>
            <div>
              <Title size="19">Apply Through Policygenius</Title>
              <Subtitle size="13" style={{ paddingTop: 5 }}>
                Apply through us and let our licensed advisors handle the rest.{' '}
              </Subtitle>
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
                  <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                    Unbiased expert advice to help you make decisions for you or your family that you can feel good
                    about
                  </Subtitle>
                  <CtaButton>
                    <Title size="15" style={{ paddingRight: 3 }}>
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
