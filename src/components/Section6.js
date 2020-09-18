import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Subtitle, Title } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight, Testimonial1, Testimonial2, QuotesCircles } from 'icons';
import Testimonials from 'assets/Testimonials.png';
import useIsVisible from 'hooks/useIsVisible';

const SectionStyle = styled.div`
  height: 615px;
  margin-top: 150px;
  margin-bottom: 400px;
`;

const SectionBg = styled.div`
  background: #d84713;
  padding-top: 30px;
  height: 100%;
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
  
    25% {
      opacity: 1;
    }

    75% {
      transform: translateY(10px);
    }
  
    to {
      transform: translateY(0);
    }
`;
const WindowBorder = styled.div`
  position: absolute;
  z-index: 999;
  width: 400px;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;

      animation: 2s ${slideInDown} backwards;
    `};
  ${({ delay }) => `animation-delay: ${delay}s;`}
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Section3 = (props) => {
  const { ...other } = props;
  const rootRef = useRef(null);
  const isVisible = useIsVisible(rootRef);

  return (
    <SectionStyle ref={rootRef} {...other} style={{ position: 'relative' }}>
      <WindowBorder delay={0.2} isVisible={isVisible} style={{ top: 100, right: 850, overflow: 'hidden' }}>
        <ImageStyle src={Testimonials} alt="window" />
      </WindowBorder>
      <Testimonial1 style={{ position: 'absolute', zIndex: 999, top: 50, right: 625 }} />
      <Testimonial2 style={{ position: 'absolute', zIndex: 999, top: 375, right: 800 }} />
      <QuotesCircles style={{ position: 'absolute', zIndex: 999, top: 450, right: 350 }} />
      <svg width="1310" height="615" style={{ position: 'absolute', top: 300, right: 0 }}>
        <rect width="1310" height="615" style={{ fill: '#F2E5CE' }} />
      </svg>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 30px 0 0', maxWidth: 'none' }}>
        <GridCol mobile={3} tablet={10} desktop={9} style={{ position: 'relative' }}>
          <SectionBg>
            <GridRow mobile tablet desktop={9}>
              <GridCol mobile={2} tablet={5} desktop={3} style={{ paddingTop: '185px' }}>
                <Title as="h1" size="64" color="#fff">
                  Testimonials
                </Title>
                <Subtitle as="h2" size="24" color="#fff" style={{ margin: '30px 0' }}>
                  We’ve helped millions. We’re here to help you.
                </Subtitle>
                <CtaButton>
                  <Title size="15" style={{ paddingRight: 3 }}>
                    Read More
                  </Title>
                  <ChevronRight />
                </CtaButton>
              </GridCol>
              <GridCol mobile={1} tablet={3} desktop={2}></GridCol>
              <GridCol mobile={1} tablet={3} desktop={4}></GridCol>
            </GridRow>
          </SectionBg>
        </GridCol>
        <GridCol mobile={1} tablet={2} desktop={3} style={{ paddingTop: '50px', paddingLeft: '50px' }}></GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section3;
