import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 7fr 1fr;

  grid-template-areas:
    'sidebar navbar'
    'sidebar title'
    'sidebar content'
    'footer footer';

  /** Tablet  */
  @media screen and (min-width: 600px) {
  }

  /** Desktop  */
  /* @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */
`;

export default Layout;
