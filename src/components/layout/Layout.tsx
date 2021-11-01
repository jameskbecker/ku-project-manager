import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 150px 9fr;
  grid-template-rows: 1fr 1fr 8fr;
  grid-template-areas:
    'navbar navbar'
    'content content'
    'content content'
    'footer footer';

  /** Desktop  */
  @media screen and (min-width: 992px) {
    grid-template-areas:
      'sidebar navbar'
      'sidebar content'
      'sidebar content'
      'footer footer';
  }
`;

export default Layout;
