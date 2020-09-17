import React from 'react';
import styled from 'styled-components';
import { Title } from 'styledComponents';
import { ChevronRightCircle } from 'icons';

const ReadMoreStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReadMore = (props) => {
  const { ...other } = props;
  return (
    <ReadMoreStyle {...other}>
      <Title size="13" style={{ paddingRight: '10px' }}>
        Read More
      </Title>
      <ChevronRightCircle size="1" />
    </ReadMoreStyle>
  );
};

export default ReadMore;
