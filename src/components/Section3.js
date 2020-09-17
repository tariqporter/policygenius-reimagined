import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Title, Text } from 'styledComponents';
import CtaButton from './CtaButton';
import GridCol from './GridCol';
import GridRow from './GridRow';
import { ChevronRight, LifeTile, DisabilityTile, HomeTile, RentersTile } from 'icons';

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
  height: 615px;
  margin-top: 150px;
  margin-bottom: 50px;
`;

const SectionBg = styled.div`
  background: #007561;
  padding-top: 30px;
  height: 100%;
`;

const Tiles = styled.div`
  position: relative;
`;

const Tile = styled.div`
  position: absolute;
  background: #fff;
  padding: 12px;
  box-shadow: 10px 10px 25px 1px rgba(43, 39, 39, 0.25);
  animation: 1.25s ${skew};

  ${({ top }) => `top: ${top}px;`}
  ${({ left }) => `left: ${left}px;`}
`;

const Section3 = (props) => {
  const { ...other } = props;

  return (
    <SectionStyle {...other}>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 30px 0 0', maxWidth: 'none' }}>
        <GridCol mobile={3} tablet={10} desktop={10} style={{ position: 'relative' }}>
          <SectionBg>
            <GridRow mobile tablet desktop>
              <GridCol mobile={2} tablet={5} desktop={5}>
                <Title as="h1" size="64" color="#fff" style={{ margin: '12px 0' }}>
                  Not your average broker
                </Title>
                <Text as="h2" size="18" color="#fff" style={{ margin: '12px 0' }}>
                  We are on a mission to help bring you the financial protection you need, and that means we offer more
                  than just insurance.
                </Text>
                <CtaButton>
                  <Text>Get Started</Text>
                  <ChevronRight />
                </CtaButton>
              </GridCol>
              <GridCol mobile={1} tablet={5} desktop={5} />
              <GridCol mobile={1} tablet={2} desktop={2}>
                <Tiles>
                  <Tile top={0} left={0}>
                    <LifeTile size={6} />
                  </Tile>
                  <Tile top={100} left={-200}>
                    <DisabilityTile size={6} />
                  </Tile>
                  <Tile top={280} left={-100}>
                    <HomeTile size={6} />
                  </Tile>
                  <Tile top={380} left={-300}>
                    <RentersTile size={6} />
                  </Tile>
                </Tiles>
              </GridCol>
            </GridRow>
          </SectionBg>
        </GridCol>
        <GridCol mobile={1} tablet={2} desktop={2}></GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section3;
