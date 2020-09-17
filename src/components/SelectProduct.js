import products from 'data/products';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from 'styledComponents';

const Products = styled.ul`
  display: flex;
  list-style: none;
`;

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

const getProductId = (name) => {
  const product = products.find((product) => product.name === name);
  return product?.id;
};

const SelectProduct = () => {
  const { name } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(getProductId(name));

  return (
    <Products>
      {products.map((product) => (
        <Product
          key={product.id}
          selected={selectedProductId === product.id}
          onClick={() => setSelectedProductId(product.id)}
        >
          <Text size="16">{product.name}</Text>
        </Product>
      ))}
    </Products>
  );
};

export default SelectProduct;
