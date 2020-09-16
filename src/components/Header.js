import React from 'react';
import styled from 'styled-components';
import { PgLogoBlack } from 'icons';

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
      <HeaderLogo />
    </HeaderStyle>
  );
};

export default Header;
