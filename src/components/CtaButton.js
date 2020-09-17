import React from 'react';
import styled from 'styled-components';

const CtaStyle = styled.button`
  padding: 12px;
  width: 172px;
  height: 64px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 0;
  outline: none;
  position: relative;
  background-color: #000;
  color: #fff;
  overflow: hidden;

  &:hover {
    color: #000;
  }

  &:hover:before {
    transform: translate3d(-80px, -80px, 0);
  }

  &:before {
    content: '';
    transition: transform 0.25s ease-in;
    display: block;
    position: absolute;
    transform: translate3d(-275px, -275px, 0);
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const CtaChild = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CtaButton = (props) => {
  const { children, ...other } = props;

  return (
    <CtaStyle type="button" {...other}>
      <CtaChild>{children}</CtaChild>
    </CtaStyle>
  );
};

export default CtaButton;
