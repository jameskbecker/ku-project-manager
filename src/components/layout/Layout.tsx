import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: 150px 9fr;
  grid-template-rows: 10vh 89fr 1fr;
  grid-template-areas:
    'navbar navbar'
    'content content'
    'footer footer';

  /** Desktop  */
  @media screen and (min-width: 992px) {
    grid-template-areas:
      'sidebar navbar'
      'sidebar content'
      'footer footer';
  }
`;

export default Layout;
