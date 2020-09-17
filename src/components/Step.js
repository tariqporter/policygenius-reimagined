import React from 'react';
import styled from 'styled-components';
import { Title } from 'styledComponents';

const StepStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  border: 1px solid #ede8e5;

  padding: 12px;
  width: 380px;
`;

export const StepNumber = styled(Title)`
  color: #d84713;
  font-size: 54px;
  padding: 16px;
`;

const Step = (props) => {
  const { children, ...other } = props;
  return <StepStyle {...other}>{children}</StepStyle>;
};

export default Step;
