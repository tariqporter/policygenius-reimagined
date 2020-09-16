import React from 'react';
import styled from 'styled-components';
import { PgLogoBlack } from 'icons';

const HeaderStyle = styled.div`
  display: flex;
  height: 80px;
  background-color: #221f20;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <PgLogoBlack style={{ margin: '20px 0 10px 20px', color: '#fff' }} />
    </HeaderStyle>
  );
};

export default Header;
