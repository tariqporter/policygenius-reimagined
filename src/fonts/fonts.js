import { createGlobalStyle } from 'styled-components';

import SharpSansMediumWoff2 from './SharpSans-Medium-min.woff2';
import SharpSansMediumWoff from './SharpSans-Medium-min.woff';
import SharpSansBoldWoff2 from './SharpSans-Bold-min.woff2';
import SharpSansBoldWoff from './SharpSans-Bold-min.woff';
import SharpSansDisplayNo1BoldWoff2 from './SharpSansDispNo1-Bold-min.woff2';
import SharpSansDisplayNo1BoldWoff from './SharpSansDispNo1-Bold-min.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'SharpSans';
    src: local('SharpSans Medium'),
    url(${SharpSansMediumWoff2}) format('woff2'),
    url(${SharpSansMediumWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
      font-family: 'SharpSans';
      src: local('SharpSans Bold'),
      url(${SharpSansBoldWoff2}) format('woff2'),
      url(${SharpSansBoldWoff}) format('woff');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: 'SharpSans Display No1 Bold';
      src: local('SharpSans Bold'),
      url(${SharpSansDisplayNo1BoldWoff2}) format('woff2'),
      url(${SharpSansDisplayNo1BoldWoff}) format('woff');
      font-style: normal;
  }
`;
