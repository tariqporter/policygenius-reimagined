import React from 'react';
import styled from 'styled-components';
import { PgLogoBlack } from 'icons';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
  display: flex;
  height: 80px;
  background-color: #221f20;
`;

const HeaderLogo = styled(PgLogoBlack)`
  margin: 20px 0 10px 20px;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <HeaderLogo />
      </Link>
    </HeaderStyle>
  );
};

export default Header;
