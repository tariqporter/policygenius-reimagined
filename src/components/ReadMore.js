import React from 'react';
import styled from 'styled-components';
import { Text } from 'styledComponents';
import { ChevronRightCircle } from 'icons';

const ReadMoreStyle = styled.div`
  display: flex;
  justify-content; center;
  align-items: center;
`;

const ReadMore = (props) => {
  const { ...other } = props;
  return (
    <ReadMoreStyle {...other}>
      <Text size="13">Read More</Text>
      <ChevronRightCircle size="1" />
    </ReadMoreStyle>
  );
};

export default ReadMore;
