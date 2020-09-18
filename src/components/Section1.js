import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import womanPool from 'assets/woman_by_pool.png';
import Quotes from 'assets/Quotes.png';
import useIsVisible from 'hooks/useIsVisible';

const SectionStyle = styled.div`
  height: 800px;
  background: #d84713;
  margin-top: 80px;
  margin-bottom: 50px;
  overflow: hidden;
`;

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
      transform: translateX(20%);
    }
  
    60% {
      opacity: 1;
      transform: translateX(-2%);
    }
  
    75% {
      transform: translateX(1%);
    }
  
    90% {
      transform: translateX(-0.5%);
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

const QuoteImageBorder = styled.div`
  position: absolute;
  height: 600px;
  box-shadow: inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.1), 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: 1.25s ${skew} backwards;
    `};
`;

const ImageBorder = styled.div`
  position: absolute;
  background: #fff;
  padding: 40px;
  width: 450px;
  height: 300px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  border: 1px solid #ede8e5;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: 1.25s ${slideInRight} backwards;
    `};
`;

const ImageStyle = styled.img`
  width: 450px;
  object-fit: cover;
  object-position: top;
  max-height: 100%;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: 1.25s ${slideInRight} backwards;
    `};
`;

const QuoteImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Section1 = (props) => {
  const { ...other } = props;
  const quoteRef = useRef(null);
  const imageRef = useRef(null);
  const quoteVisible = useIsVisible(quoteRef);
  const imageVisible = useIsVisible(imageRef);

  return (
    <SectionStyle {...other}>
      <QuoteImageBorder style={{ top: 120, right: -350, overflow: 'hidden' }} ref={quoteRef} isVisible={quoteVisible}>
        <QuoteImageStyle src={Quotes} alt="Quote mockup" style={{ zIndex: '1000' }} />
      </QuoteImageBorder>
      <ImageBorder style={{ top: 500, right: 500, overflow: 'hidden' }} ref={imageRef} isVisible={imageVisible}>
        <ImageStyle src={womanPool} alt="Woman by Pool" isVisible={imageVisible} />
      </ImageBorder>
      <GridRow mobile tablet desktop>
        <GridCol mobile={4} tablet={12} desktop={12}>
          <GridRow mobile tablet desktop>
            <GridCol mobile={2} tablet={5} desktop={7} style={{ display: 'grid', alignItems: 'center' }}>
              <div style={{ paddingTop: 200, paddingBottom: '40px' }}>
                <Title as="h1" size="72" color="#fff">
                  Financial protection all in one place
                </Title>
                <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                  Unbiased expert advice to help you make decisions for you or your family that you can feel good about
                </Subtitle>
                <CtaButton>
                  <Title size="15" style={{ paddingRight: 3 }}>
                    Get Started
                  </Title>
                  <ChevronRight />
                </CtaButton>
              </div>
            </GridCol>
            <GridCol mobile={1} tablet={2} desktop={5} />
          </GridRow>
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section1;
