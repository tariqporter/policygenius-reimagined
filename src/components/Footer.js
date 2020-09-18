import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { ChevronRight } from 'icons';
import Leaves from 'components/Leaves';
import DashboardMockup from 'assets/Dashboard_Mockup.png';

const SectionStyle = styled.div`
  height: 400px;
  margin-top: 150px;
`;

const SectionBg = styled.div`
  background: #000;
  padding-top: 30px;
  height: 100%;
`;

const DashboardImageBorder = styled.div`
  position: absolute;
  height: 500px;
  border-radius: 5px;
  z-index: 999;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
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
