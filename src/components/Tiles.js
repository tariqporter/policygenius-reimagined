import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Title } from 'styledComponents';
import womanCouch from 'assets/woman_on_couch.png';
import womanWill from 'assets/woman_reading_will.png';
import flower from 'assets/flower.png';
import ReadMore from 'components/ReadMore';

const slideInDown = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
  
    25% {
      opacity: 1;
    }

    75% {
      transform: translateY(10px);
    }
  
    to {
      transform: translateY(0);
    }
`;

const TilesStyle = styled.div`
  display: flex;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  height: 400px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.08);
  border: 1px solid #ede8e5;
  border-radius: 10px;
  margin: 20px;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: 1.25s ${slideInDown};
        `
      : `
    opacity: 0;
    transform: translateY(-100px);
  `};
  ${({ delay }) => `animation-delay: ${delay}s;`}
`;

const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 12px;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const Tiles = (props) => {
  const rootRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const onScroll = (e) => {
      const { height } = rootRef.current.getBoundingClientRect();
      const offsetTop = rootRef.current.offsetTop;
      const pageBottom = window.pageYOffset + window.innerHeight;
      if (window.pageYOffset < offsetTop + height && isVisible) {
        setIsVisible(false);
      } else {
        setIsVisible(pageBottom > offsetTop);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TilesStyle ref={rootRef}>
      <Tile delay={0} isVisible={isVisible}>
        <div>
          <ImageStyle src={womanCouch} alt="Woman on couch" />
        </div>
        <TileContent>
          <Title size="12" color="#2B2727" style={{ paddingTop: '35px', paddingBottom: '10px', letterSpacing: '2px' }}>
            PG INSURANCE
          </Title>
          <Title size="24" color="#D84713">
            Life Insurance Guide
          </Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
      <Tile delay={0.3} isVisible={isVisible} style={{ marginTop: '40px' }}>
        <div>
          <ImageStyle src={womanWill} alt="Woman reading will" />
        </div>
        <TileContent>
          <Title size="12" color="#2B2727" style={{ paddingTop: '35px', paddingBottom: '10px', letterSpacing: '2px' }}>
            PG WILLS & TRUSTS
          </Title>
          <Title size="24" color="#D84713">
            Starting a Will or Trust
          </Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
      <Tile delay={0.6} isVisible={isVisible} style={{ marginTop: '80px' }}>
        <div>
          <ImageStyle src={flower} alt="Flower" />
        </div>
        <TileContent>
          <Title size="12" color="#2B2727" style={{ paddingTop: '35px', paddingBottom: '10px', letterSpacing: '2px' }}>
            PG FINANCE
          </Title>
          <Title size="24" color="#D84713">
            Easy Money Newsletter
          </Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
    </TilesStyle>
  );
};

export default Tiles;
