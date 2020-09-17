import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import Tiles from 'components/Tiles';

const SectionStyle = styled.div`
  height: 545px;
  padding-top: 30px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Section4 = (props) => {
  const { ...other } = props;
  return (
    <SectionStyle {...other}>
      <GridRow mobile tablet desktop>
        <GridCol mobile={4} tablet={12} desktop={12}>
          <SectionHeader>
            <Title size="54">Learn How to Protect Your Family</Title>
            <Subtitle size="18">Get started with some of our more popular guides and educational content</Subtitle>
          </SectionHeader>
          <Tiles />
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section4;
