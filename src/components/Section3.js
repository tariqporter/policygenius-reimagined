import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Subtitle, Title } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight } from 'icons';
import Leaves from 'components/Leaves';
import DashboardMockup from 'assets/Dashboard_Mockup.png';
import useIsVisible from 'hooks/useIsVisible';

const SectionStyle = styled.div`
  height: 615px;
  margin-top: 300px;
  margin-bottom: 50px;
`;

const SectionBg = styled.div`
  background: #007561;
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
const DashboardImageBorder = styled.div`
  position: absolute;
  height: 500px;
  border-radius: 5px;
  z-index: 999;
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
      <DashboardImageBorder isVisible={isVisible} delay={0.2} style={{ top: 75, left: 100, overflow: 'hidden' }}>
        <ImageStyle src={DashboardMockup} alt="Quote mockup" />
      </DashboardImageBorder>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 30px 0 0', maxWidth: 'none' }}>
        <GridCol mobile={3} tablet={10} desktop={10} style={{ position: 'relative' }}>
          <SectionBg>
            <GridRow mobile tablet desktop={10}>
              <GridCol mobile={1} tablet={5} desktop={5} />
              <GridCol mobile={2} tablet={5} desktop={5} style={{ paddingTop: '150px' }}>
                <Title as="h1" size="64" color="#fff">
                  Not your average broker
                </Title>
                <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                  We are on a mission to help bring you the financial protection you need, and that means we offer more
                  than just insurance.
                </Subtitle>
                <CtaButton>
                  <Title size="15" style={{ paddingRight: 3 }}>
                    Get Started
                  </Title>
                  <ChevronRight />
                </CtaButton>
              </GridCol>
            </GridRow>
          </SectionBg>
        </GridCol>
        <GridCol mobile={1} tablet={2} desktop={2} style={{ paddingTop: '50px', paddingLeft: '50px' }}>
          <Leaves isVisible={isVisible} />
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section3;
