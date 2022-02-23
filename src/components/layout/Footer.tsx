import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Separator from '../global/Separator';

const FooterWrapper = styled.footer`
  grid-area: footer;

  font-size: 0.625rem;
  font-weight: 600;
  width: 100%;

  color: ${theme.text};
  text-align: center;
  background: ${theme.bg};
  padding: 0.25rem 0;
  box-sizing: border-box;
  border-right: 1px solid ${theme.secondary};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Built by James K. Becker</span>
    </FooterWrapper>
  );
};

export default Footer;
