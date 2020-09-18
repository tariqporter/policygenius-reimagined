import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import HeaderContent from './HeaderContent';

const HeaderDropdownStyle = styled.div`
  display: flex;
  background-color: #000;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
  z-index: 100;

  ${({ visible }) =>
    visible
      ? `
    opacity: 1;
    height: 450px;
  `
      : `
    opacity: 0;
    height: 0;
`}//   opacity: 1;
//   height: 450px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const HeaderContentStyle = styled.div`
  display: flex;
  padding: 64px;
`;

const HeaderDropdown = (props) => {
  const { vertical, ...other } = props;
  const [focusInside, setFocusInside] = useState(false);
  const [display, setDisplay] = useState(vertical || focusInside);
  const [selectedVertical, setSelectedVertical] = useState(null);

  useEffect(() => {
    setDisplay(vertical || focusInside);
  }, [vertical, focusInside]);

  useEffect(() => {
    if (vertical) setSelectedVertical(vertical);
  }, [vertical]);

  return (
    <>
      <HeaderDropdownStyle
        visible={display}
        onMouseEnter={() => setFocusInside(true)}
        onMouseLeave={() => setFocusInside(false)}
        {...other}
      >
        <HeaderContentStyle>
          <HeaderContent selectedVertical={selectedVertical} />
        </HeaderContentStyle>
      </HeaderDropdownStyle>
      {display && createPortal(<Backdrop />, document.body)}
    </>
  );
};

export default HeaderDropdown;
