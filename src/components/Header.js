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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;

const NavSection = styled.div`
  display: flex;
  margin: 0 auto;
  flex-grow: 3;
  justify-content: center;
  flex-basis: 0;
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogInButton = styled.div`
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled(PgLogoBlack)`
  color: #fff;
`;

const CTASection = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-basis: 0;
`;

const LogoSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
`;

const Header = () => {
  return (
    <>
      <HeaderStyle style={{ paddingRight: 64, paddingLeft: 64 }}>
        <LogoSection>
          <Link to="/">
            <HeaderLogo />
          </Link>
        </LogoSection>
        <NavSection>
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id}>
              <Title size="18">{navLink.name}</Title>
              {navLink.children && <ChevronDown style={{ marginLeft: 10, width: 14, height: 20 }} />}
            </NavLink>
          ))}
        </NavSection>
        <CTASection>
          <LogInButton style={{ marginRight: 20 }}>
            <Title size="18">Log In</Title>
          </LogInButton>
          <CtaButton>
            <Title size="18" style={{ paddingRight: 10 }}>
              Get Started
            </Title>
            <ChevronRight />
          </CtaButton>
        </CTASection>
      </HeaderStyle>
    </>
  );
};

export default Header;
