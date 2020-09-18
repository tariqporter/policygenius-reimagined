import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight } from 'icons';
import window from 'assets/window.png';
import Questions from 'assets/Questions.png';

const SectionStyle = styled.div`
  height: 615px;
  margin-top: 150px;
  margin-bottom: 50px;
`;

const SectionBg = styled.div`
  background: #470303;
  padding-top: 30px;
  height: 100%;
`;

const WindowBorder = styled.div`
  position: absolute;
  z-index: 999;

  background: #fff;
  padding: 40px;
  width: 400px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  border: 1px solid #ede8e5;
`;

const QuestionsBorder = styled.div`
  position: absolute;
  height: 600px;
  border-radius: 5px;
  z-index: 999;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Section3 = (props) => {
  const { ...other } = props;

  return (
    <SectionStyle {...other} style={{ position: 'relative' }}>
      <WindowBorder style={{ top: 50, right: 100, overflow: 'hidden' }}>
        <ImageStyle src={window} alt="window" />
      </WindowBorder>
      <QuestionsBorder style={{ top: 125, left: -50, overflow: 'hidden' }}>
        <ImageStyle src={Questions} alt="Questions mockup" />
      </QuestionsBorder>
      <GridRow mobile tablet desktop style={{ height: '100%', margin: '0 30px 0 0', maxWidth: 'none' }}>
        <GridCol mobile={3} tablet={10} desktop={9} style={{ position: 'relative' }}>
          <SectionBg>
            <GridRow mobile tablet desktop={9}>
              <GridCol mobile={1} tablet={3} desktop={4} />
              <GridCol mobile={2} tablet={5} desktop={4} style={{ paddingTop: '75px' }}>
                <Title as="h1" size="64" color="#fff">
                  We’re sure you still have some questions
                </Title>
                <Subtitle as="h2" size="18" color="#fff" style={{ margin: '30px 0' }}>
                  Feel free to reach out to our licensed insurance experts. They’re happy to help, and don’t work on
                  commission.
                </Subtitle>
                <CtaButton>
                  <Title size="15" style={{ paddingRight: 3 }}>
                    Learn More About Us
                  </Title>
                  <ChevronRight />
                </CtaButton>
              </GridCol>
              <GridCol mobile={1} tablet={3} desktop={1} />
            </GridRow>
          </SectionBg>
        </GridCol>
        <GridCol mobile={1} tablet={2} desktop={3} style={{ paddingTop: '50px', paddingLeft: '50px' }}></GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section3;
