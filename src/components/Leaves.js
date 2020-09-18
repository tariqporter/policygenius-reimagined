import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { LifeTile, DisabilityTile, HomeTile, RentersTile } from 'icons';
import useIsVisible from 'hooks/useIsVisible';

const skew = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform-origin: top;
      transform: rotateX(75deg) rotateY(10deg) rotateZ(-9deg);
    }
  
    60% {
      opacity: 1;
    }

    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    }
`;

// Estimate height of content for helping useIsVisible
const LeavesStyle = styled.div`
  position: relative;
  height: 530px;
`;

const Leaf = styled.div`
  border: 1px solid #ede8e5;
  position: absolute;
  background: #fff;
  padding: 12px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      animation: 1.25s ${skew} backwards;
    `};

  ${({ top }) => `top: ${top}px;`}
  ${({ left }) => `left: ${left}px;`}
  animation-delay: 0.6s;
`;

const Leaves = () => {
  const rootRef = useRef(null);
  const isVisible = useIsVisible(rootRef);

  return (
    <LeavesStyle ref={rootRef}>
      <Leaf top={0} left={0} isVisible={isVisible}>
        <LifeTile size={6} />
      </Leaf>
      <Leaf top={100} left={-200} isVisible={isVisible}>
        <DisabilityTile size={6} />
      </Leaf>
      <Leaf top={280} left={-100} isVisible={isVisible}>
        <HomeTile size={6} />
      </Leaf>
      <Leaf top={380} left={-300} isVisible={isVisible}>
        <RentersTile size={6} />
      </Leaf>
    </LeavesStyle>
  );
};

export default Leaves;
