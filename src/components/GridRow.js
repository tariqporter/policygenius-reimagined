import styled from 'styled-components';
import { TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY, LARGE_DESKTOP_MEDIA_QUERY } from 'styles/mediaQueries';

const GridRow = styled.div`
  display: none;
  /*
    IE Support
  */
  display: -ms-grid;

  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-column-gap: 24px;
  min-width: 272px;
  margin-left: 24px;
  margin-right: 24px;

  ${({ mobile }) =>
    mobile && typeof mobile === 'number'
      ? `
          display: grid;
          grid-template-columns: repeat(${mobile}, minmax(50px, 1fr));
          max-width: auto;
          min-width: auto;
          margin-right: 0;
          margin-left: 0;
    `
      : `
          display: grid;
      `}

  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(34px, 1fr));
    grid-column-gap: 24px;
    margin-left: 48px;
    margin-right: 48px;

    ${({ tablet }) =>
      tablet && typeof tablet === 'number'
        ? `
            display: grid;
            grid-template-columns: repeat(${tablet}, minmax(34px, 1fr));
            max-width: auto;
            min-width: auto;
            margin-right: 0;
            margin-left: 0;
      `
        : `
            display: grid;  
        `}
  }
  @media ${DESKTOP_MEDIA_QUERY} {
    grid-template-columns: repeat(12, minmax(53px, 1fr));
    grid-column-gap: 24px;
    max-width: 1152px;
    min-width: 900px;
    margin-right: 64px;
    margin-left: 64px;

    /*
      IE Support
    */
    -ms-grid-columns: minmax(53px, 74px) 24px;

    ${({ desktop }) =>
      desktop && typeof desktop === 'number'
        ? `
            display: grid;
            grid-template-columns: repeat(${desktop}, minmax(53px, 1fr));
            max-width: auto;
            min-width: auto;
            margin-right: 0;
            margin-left: 0;
      `
        : `
            display: grid;
        `}
  }

  @media ${LARGE_DESKTOP_MEDIA_QUERY} {
    margin: 0 auto;
  }
`;

export default GridRow;
