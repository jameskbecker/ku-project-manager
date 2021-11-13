import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: 200px 9fr;
  grid-template-rows: 10vh 10vh 79fr 1fr;
  grid-template-areas:
    'navbar navbar'
    'control control'
    'content content'
    'footer footer';

  /** Desktop  */
  @media screen and (min-width: 992px) {
    grid-template-areas:
      'sidebar navbar'
      'sidebar control'
      'sidebar content'
      'footer content';
  }
`;

export default Layout;
