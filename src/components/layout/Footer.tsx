import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const FooterWrapper = styled.footer`
  flex: 0 0 1rem;
  font-size: 0.75rem;
  color: white;
  text-align: center;
  background-color: ${theme.dark};
`;

const Footer = () => {
  return <FooterWrapper>Built by James Becker</FooterWrapper>;
};

export default Footer;
