import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const FooterWrapper = styled.footer`
  grid-area: footer;

  font-size: 0.75rem;
  width: 100%;
  min-height: 1rem;
  color: white;
  text-align: center;
  background-color: ${theme.dark};
`;

const Footer = () => {
  return <FooterWrapper>Built by James Becker</FooterWrapper>;
};

export default Footer;
