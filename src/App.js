import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import GlobalFonts from './fonts/fonts.js';

const Title = styled.div`
  font-family: 'SharpSans Display No1 Bold', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.7px;
  font-size: ${(props) => props.fontSize};
`;

const Text = styled.div`
  font-family: 'SharpSans', Arial, sans-serif;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.1px;
  font-size: ${(props) => props.fontSize};
`;

function App() {
  return (
    <div className="App">
      <GlobalFonts />

      <Title fontSize="64px">Shop the market and get insurance right</Title>
    </div>
  );
}

export default App;
