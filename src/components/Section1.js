import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight } from 'icons';
import womanPool from 'assets/woman_by_pool.png';
import Quotes from 'assets/Quotes.png';

const SectionStyle = styled.div`
  height: 800px;
  background: #d84713;
  margin-top: 80px;
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

const QuoteImageBorder = styled.div`
  position: absolute;
  height: 600px;
  box-shadow: inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.1), 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);
  animation: 1.25s ${slideInDown};
`;

const ImageBorder = styled.div`
  position: absolute;
  background: #fff;
  padding: 40px;
  width: 450px;
  height: 300px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  animation: 1.25s ${slideInDown};
  border: 1px solid #ede8e5;
`;

const ImageStyle = styled.img`
  width: 450px;
  object-fit: cover;
  object-position: top;
  max-height: 100%;
  animation: 1.25s ${slideInDown};
`;

const QuoteImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  animation: 1.25s ${slideInDown};
`;

const Section1 = (props) => {
  const { ...other } = props;
  return (
    <SectionStyle {...other}>
      <QuoteImageBorder style={{ top: 120, right: -350, overflow: 'hidden' }}>
        <QuoteImageStyle src={Quotes} alt="Quote mockup" style={{ zIndex: '1000' }} />
      </QuoteImageBorder>
      <ImageBorder style={{ top: 500, right: 500, overflow: 'hidden' }}>
        <ImageStyle src={womanPool} alt="Woman by Pool" />
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
