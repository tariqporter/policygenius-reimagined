import React from 'react';
import styled from 'styled-components';
import { PgLogoBlack } from 'icons';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #221f20;
  position: absolute;
  width: 100%;
  z-index: 1000;
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
      </HeaderStyle>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Header;
