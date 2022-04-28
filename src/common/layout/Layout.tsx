import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: auto 9fr;
  grid-auto-rows: auto auto 1fr;
  grid-template-areas:
    'navbar navbar'
    'control control'
    'content content';
  /** Desktop  */
  @media screen and (min-width: 992px) {
    grid-template-areas:
      'sidebar navbar'
      'sidebar control'
      'sidebar content';
  }
`;

export default Layout;
