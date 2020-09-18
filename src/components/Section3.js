import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight } from 'icons';
import Leaves from 'components/Leaves';

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

const Section3 = (props) => {
  const { ...other } = props;

  return (
    <SectionStyle {...other}>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 30px 0 0', maxWidth: 'none' }}>
        <GridCol mobile={3} tablet={10} desktop={10} style={{ position: 'relative' }}>
          <SectionBg>
            <GridRow mobile tablet desktop={10}>
              <GridCol mobile={1} tablet={5} desktop={1} />
              <GridCol mobile={2} tablet={5} desktop={6} style={{ paddingTop: '150px' }}>
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
        <GridCol mobile={1} tablet={2} desktop={2} style={{ paddingTop: '50px' }}>
          <Leaves />
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section3;
