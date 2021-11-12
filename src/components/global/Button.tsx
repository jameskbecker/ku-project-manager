import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type ButtonProps = {
  color?: string;
};

const Button = styled.button<ButtonProps>`
  color: ${theme.bg};
  background-color: ${({ color }) => (color ? color : theme.primary)};
  padding: 1em 1.25em;
  margin: 0.25em 0.5em;
  border-radius: 10em;
  height: auto;
  font-weight: 600;
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  opacity: 0.8;

  :hover {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }
`;

export default Button;
