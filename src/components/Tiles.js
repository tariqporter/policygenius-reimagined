import React from 'react';
import styled, { keyframes } from 'styled-components';
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
  box-shadow: 2px 2px 10px 1px rgba(43, 39, 39, 0.25);
  margin: 20px;
  animation: 1.25s ${slideInDown};
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
`;

const Tiles = (props) => {
  return (
    <TilesStyle>
      <Tile delay={0}>
        <div>
          <ImageStyle src={womanCouch} alt="Woman on couch" />
        </div>
        <TileContent>
          <Title size="12" color="#808080">
            PG INSURANCE
          </Title>
          <Title size="30">Life Insurance Guide</Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
      <Tile delay={0.3}>
        <div>
          <ImageStyle src={womanWill} alt="Woman reading will" />
        </div>
        <TileContent>
          <Title size="12" color="#808080">
            PG WILLS & TRUSTS
          </Title>
          <Title size="30">Starting a Will or Trust</Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
      <Tile delay={0.6}>
        <div>
          <ImageStyle src={flower} alt="Flower" />
        </div>
        <TileContent>
          <Title size="12" color="#808080">
            PG FINANCE
          </Title>
          <Title size="30">Easy Money Newsletter</Title>
          <ReadMore style={{ marginTop: 'auto' }} />
        </TileContent>
      </Tile>
    </TilesStyle>
  );
};

export default Tiles;
