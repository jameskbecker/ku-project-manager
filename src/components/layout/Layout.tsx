import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 1fr 8fr;
  grid-template-areas:
    'navbar navbar'
    'title title'
    'content content'
    'footer footer';

  /** Desktop  */
  @media screen and (min-width: 992px) {
    grid-template-areas:
      'navbar navbar'
      'sidebar title'
      'sidebar content'
      'footer footer';
  }
`;

export default Layout;
