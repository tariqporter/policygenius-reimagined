import React, { useRef } from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from 'styledComponents';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import Tiles from 'components/Tiles';
import useIsVisible from 'hooks/useIsVisible';

const SectionStyle = styled.div`
  height: 545px;
  padding-top: 100px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Section4 = (props) => {
  const { ...other } = props;
  const rootRef = useRef(null);
  const isVisible = useIsVisible(rootRef);

  return (
    <SectionStyle {...other} ref={rootRef}>
      <GridRow mobile tablet desktop>
        <GridCol mobile={4} tablet={12} desktop={12}>
          <SectionHeader>
            <Title size="54" style={{ paddingBottom: '30px' }}>
              Learn How to Protect Your Family
            </Title>
            <Subtitle size="18">Get started with some of our more popular guides and educational content</Subtitle>
          </SectionHeader>
          <Tiles />
        </GridCol>
      </GridRow>
    </SectionStyle>
  );
};

export default Section4;
