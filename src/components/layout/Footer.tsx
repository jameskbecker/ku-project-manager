import React from 'react';
import styled from 'styled-components';
import Separator from '../global/Separator';

const FooterWrapper = styled.footer`
  grid-area: footer;

  font-size: 0.625rem;
  font-weight: 600;
  width: 100%;

  color: ${({ theme }) => theme.text};
  text-align: center;
  background: ${({ theme }) => theme.bg};
  padding: 0.25rem 0;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Built by James K. Becker</span>
    </FooterWrapper>
  );
};

export default Footer;
