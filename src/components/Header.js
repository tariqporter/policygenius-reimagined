import React from 'react';
import styled from 'styled-components';
import { ChevronDown, PgLogoBlack } from 'icons';
import { Link } from 'react-router-dom';
import navLinks from 'data/navLinks';
import { Title, Subtitle } from 'styledComponents';
import CtaButton from './CtaButton';
import { ChevronRight } from 'icons';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #d84713;
  position: absolute;
  width: 100%;
  z-index: 1000;
`;

const NavSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled(PgLogoBlack)`
  margin-left: 64px;
  color: #fff;
  margin-right: auto;
`;

const CTASection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Link to="/">
          <HeaderLogo />
        </Link>
        <NavSection>
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id}>
              <Title size="18">{navLink.name}</Title>
              {navLink.children && <ChevronDown style={{ marginLeft: 10, width: 14, height: 20 }} />}
            </NavLink>
          ))}
        </NavSection>
        <CTASection>
          <NavLink style={{ marginRight: 30 }}>
            <Title size="18">Log In</Title>
          </NavLink>
          <CtaButton style={{ marginRight: 64 }}>
            <Title size="18" style={{ paddingRight: 10 }}>
              Get Started
            </Title>
            <ChevronRight />
          </CtaButton>
        </CTASection>
      </HeaderStyle>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Header;
