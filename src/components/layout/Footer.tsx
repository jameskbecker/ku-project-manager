import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const FooterWrapper = styled.footer`
  grid-area: footer;

  font-size: 0.75rem;
  padding: 0.25em 0;
  width: 100%;
  min-height: 1rem;
  color: white;
  text-align: center;
  background-color: ${theme.sidebar};
`;

const Footer = () => {
  return <FooterWrapper>Built by James Becker</FooterWrapper>;
};

export default Footer;
