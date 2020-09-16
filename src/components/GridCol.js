import styled from 'styled-components';
import { TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from 'styles/mediaQueries';

export const GridCol = styled.div`
  ${({ mobile }) =>
    mobile
      ? `grid-column: auto / span ${mobile};
    -ms-grid-column: ${mobile};`
      : 'display: none'};

  @media ${TABLET_MEDIA_QUERY} {
    ${({ tablet }) =>
      tablet
        ? `grid-column: auto / span ${tablet};
      -ms-grid-column: ${tablet};`
        : 'display:none'};
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    ${({ desktop }) =>
      desktop
        ? `grid-column: auto / span ${desktop};
      -ms-grid-column: ${desktop};`
        : 'display:none'};

    ${({ desktop, tablet }) => desktop && !tablet && 'display: inline'}
  }
`;
