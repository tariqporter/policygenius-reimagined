import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.div`
  ${({ color }) => color && `color: ${color};`}
  font-family: 'SharpSans Display No1 Bold', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.7px;
  line-height: ${(props) => `${1 * props.size}px`};
  font-size: ${(props) => `${props.size}px`};
`;

export const Subtitle = styled.div`
  ${({ color }) => color && `color: ${color};`}
  font-family: 'SharpSans', Arial, sans-serif;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.1px;
  line-height: '28px';
  font-size: ${(props) => `${props.size}px`};
`;

export const Text = styled.div`
  ${({ color }) => color && `color: ${color};`}
  font-family: 'SharpSans', Arial, sans-serif;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.1px;
  line-height: ${(props) => `${1.5 * props.size}px`};
  font-size: ${(props) => `${props.size}px`};
`;

export const AccentTitle = styled.div`
  ${({ color }) => color && `color: ${color};`}
  font-family: 'Mercury Display';
  margin: 0;
  letter-spacing: 0.7px;
  line-height: 34px;
  font-size: ${(props) => `${props.size}px`};
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;
