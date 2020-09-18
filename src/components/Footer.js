import React from 'react';
import styled from 'styled-components';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';

const SectionStyle = styled.div`
  height: 400px;
  margin-top: 150px;
`;

const SectionBg = styled.div`
  background: #000;
  padding-top: 30px;
  height: 100%;
`;

const Footer = (props) => {
  const { ...other } = props;

  return (
    <SectionStyle {...other} style={{ position: 'relative' }}>
      <SectionBg>
        <GridRow>
          <GridCol desktop={3}></GridCol>
          <GridCol desktop={3}></GridCol>
          <GridCol desktop={3}></GridCol>
          <GridCol desktop={3}></GridCol>
        </GridRow>
      </SectionBg>
    </SectionStyle>
  );
};

export default Footer;
