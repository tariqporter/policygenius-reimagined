import products from 'data/products';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Title } from 'styledComponents';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { LifeTile, DisabilityTile, HomeTile, RentersTile } from 'icons';

const Product = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 6px;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(50, 50, 50, 0.25);
  ${({ selected }) => (selected ? 'border-bottom: 2px solid #ff700a' : 'border-bottom: 2px solid transparent')}
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 270px;
  border: 5px solid #ede8e5;
  background-color: #fff;

  cursor: pointer;

  &:hover {
    border: 5px solid #fff;
    background-color: #d84713;
  }
`;

const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 12px 0 30px 0;
  justify-content: center;
`;
const getProductId = (name) => {
  const product = products.find((product) => product.name === name);
  return product?.id;
};

const SelectProduct = () => {
  const { name } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <GridRow style={{ paddingTop: 160 }}>
        <GridCol desktop={2} />
        <GridCol desktop={8} style={{ textAlign: 'center' }}>
          <Title size="64">Shop the market & get insurance right</Title>
        </GridCol>
        <GridCol desktop={2} />
      </GridRow>
      <GridRow style={{ paddingTop: 28 }}>
        <GridCol desktop={4} />
        <GridCol desktop={4} style={{ textAlign: 'center' }}>
          <Text size="18">Select a product to get started on your financial protection journey</Text>
        </GridCol>
        <GridCol desktop={4} />
      </GridRow>
      <GridRow desktop style={{ paddingTop: 80, display: 'grid', height: '100vh - 80px', alignItems: 'center' }}>
        <GridCol desktop={3}>
          <Tile
            delay={0}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setSelectedProductId(true)}
          >
            <TileContent>
              <LifeTile size={6} hovered={hovered} />
              <Title
                size="15"
                color="#2B2727"
                style={{ paddingTop: '30px', paddingBottom: '10px', letterSpacing: '2px', color: hovered && '#fff' }}
              >
                LIFE INSURANCE
              </Title>
            </TileContent>
          </Tile>
        </GridCol>
        <GridCol desktop={3}>
          <Tile delay={0} onClick={() => setSelectedProductId(true)}>
            <TileContent>
              <DisabilityTile size={6} />
              <Title
                size="15"
                color="#2B2727"
                style={{ paddingTop: '30px', paddingBottom: '10px', letterSpacing: '2px' }}
              >
                DISABILITY INSURANCE
              </Title>
            </TileContent>
          </Tile>
        </GridCol>
        <GridCol desktop={3}>
          <Tile delay={0} onClick={() => setSelectedProductId(true)}>
            <TileContent>
              <HomeTile size={6} />
              <Title
                size="15"
                color="#2B2727"
                style={{ paddingTop: '30px', paddingBottom: '10px', letterSpacing: '2px' }}
              >
                HOME INSURANCE
              </Title>
            </TileContent>
          </Tile>
        </GridCol>
        <GridCol desktop={3}>
          <Tile delay={0} onClick={() => setSelectedProductId(true)}>
            <TileContent>
              <RentersTile size={6} />
              <Title
                size="15"
                color="#2B2727"
                style={{ paddingTop: '30pxs', paddingBottom: '10px', letterSpacing: '2px' }}
              >
                RENTERS INSURANCE
              </Title>
            </TileContent>
          </Tile>
        </GridCol>
      </GridRow>
    </>
  );
};

export default SelectProduct;
