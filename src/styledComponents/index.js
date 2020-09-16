import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.div`
  color: #2b2727;
  font-family: 'SharpSans Display No1 Bold', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.7px;
  font-size: ${(props) => `${props.size}px`};
`;

export const Text = styled.div`
  color: #2b2727;
  font-family: 'SharpSans', Arial, sans-serif;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.1px;
  font-size: ${(props) => props.fontSize};
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;
