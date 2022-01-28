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

  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.textButton};
  background: ${({ color }) => (color ? color : theme.accent)};
  padding: 0.5rem 0.75rem;
  /* margin: 0.25em 0.5em; */
  border: 1.5px solid ${({ color }) => (color ? color : theme.accent)};
  box-sizing: border-box;
  border-radius: ${({ round }) => (round ? '20px' : '5px')};
  /* box-shadow: 1px 1px 3px 0 #00000030; */

  cursor: pointer;
  -webkit-appearance: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;

  :hover {
    background: ${({ color }) => (color ? color : theme.accentB)};
    transition: 0.5s ease-in-out;
  }

  & > :nth-child(2) {
    margin: 0 0 0 0.5em;
  }

  ${({ light, color }) =>
    light &&
    css`
      background: transparent;
      border-color: ${color ? color : theme.accent};
      color: ${color ? color : theme.accent};

      :hover {
        background: ${color ? color : theme.accent};
        color: ${theme.textButton};
      }
    `}

  /** Tablet  */
  @media screen and (max-width: 992px) {
    & > :nth-child(2) {
      display: none;
    }
  }
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
