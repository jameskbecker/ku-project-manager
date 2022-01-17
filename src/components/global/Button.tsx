import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

type ButtonProps = {
  color?: string;
  text?: string;
  light?: boolean;
  icon?: IconProp;
  onClick?: any;
  round?: boolean;
};

const ButtonWrapper = styled.button<ButtonProps>`
  min-width: 100px;
  height: auto;

  font-weight: 600;
  color: ${theme.text};
  background-color: ${({ color }) => (color ? color : theme.primary)};
  padding: 0.75em 1.25em;
  margin: 0.25em 0.5em;
  border: 1.5px solid ${({ color }) => (color ? color : theme.primary)};
  border-radius: ${({ round }) => (round ? '10rem' : '0.5rem')};
  box-shadow: 1px 1px 3px 0 #00000030;

  cursor: pointer;
  -webkit-appearance: none;
  opacity: 0.8;

  :hover {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }

  & > :nth-child(2) {
    margin: 0 0 0 0.5em;
  }

  ${({ light, color }) =>
    light &&
    css`
      background-color: transparent;
      border-color: ${color ? color : theme.primary};
      color: ${color ? color : theme.primary};

      :hover {
        background-color: ${color ? color : theme.primary};
        color: white;
      }
    `}
`;

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper {...props}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.text && <span>{props.text}</span>}
    </ButtonWrapper>
  );
};

export default Button;
