import React from 'react';
import styled from 'styled-components';
import { ChevronDown, PgLogoBlack } from 'icons';
import { Link } from 'react-router-dom';
import navLinks from 'data/navLinks';
import { Text } from 'styledComponents';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #221f20;
  position: absolute;
  width: 100%;
  z-index: 1000;
`;

const NavSection = styled.div`
  display: flex;
  margin: 0 auto;
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled(PgLogoBlack)`
  margin-left: 30px;
  color: #fff;
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
              <Text>{navLink.name}</Text>
              {navLink.children && <ChevronDown style={{ marginLeft: 10, width: 14, height: 20 }} />}
            </NavLink>
          ))}
        </NavSection>
      </HeaderStyle>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Header;
