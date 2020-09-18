import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown, PgLogoBlack } from 'icons';
import { Link } from 'react-router-dom';
import navLinks from 'data/navLinks';
import { Title } from 'styledComponents';
import CtaButton from './CtaButton';
import { ChevronRight } from 'icons';
import HeaderDropdown from './HeaderDropdown';
import { createPortal } from 'react-dom';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  overflow-x: hidden;
  transition: background-color 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${({ isScrolling }) => (isScrolling ? '#000' : '#d84713')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;

const NavSection = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-grow: 3;
  justify-content: center;
  flex-basis: 0;
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #fff;
  padding: 0 15px;
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleVisible = (value) => {
    console.log(value);
    setVisible(value);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setIsScrolling(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeaderStyle isScrolling={isScrolling} style={{ paddingRight: 64, paddingLeft: 64 }}>
        <LogoSection>
          <Link to="/">
            <HeaderLogo />
          </Link>
        </LogoSection>
        <NavSection>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              onMouseEnter={() => toggleVisible(true)}
              onMouseLeave={() => toggleVisible(false)}
            >
              <Title size="15">{navLink.name}</Title>
              {navLink.children && <ChevronDown style={{ marginLeft: 5, width: 14, height: 20 }} />}
            </NavLink>
          ))}
        </NavSection>
        <CTASection>
          <LogInButton style={{ marginRight: 20 }}>
            <Title size="15">Log In</Title>
          </LogInButton>
          <CtaButton style={{ backgroundColor: isScrolling && '#d84713' }}>
            <Title size="15" style={{ paddingRight: 3 }}>
              Get Started
            </Title>
            <ChevronRight />
          </CtaButton>
        </CTASection>
      </HeaderStyle>
      <HeaderDropdown visible={visible} />
    </>
  );
};

export default Header;
