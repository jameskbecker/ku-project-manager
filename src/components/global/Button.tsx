import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  color?: string;
  text?: string;
  light?: boolean;
  highlightColor?: string;
  icon?: IconProp;
  onClick?: any;
  round?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  /* min-width: 100px; */
  height: auto;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ color, theme }) => (color ? theme.text : theme.textButton)};
  background: ${({ color, theme }) => (color ? color : theme.accent)};
  padding: 0.5rem 1.25rem;

  border: 1.5px solid ${({ color, theme }) => (color ? color : theme.accent)};
  box-sizing: content-box;
  border-radius: ${({ round }) => (round ? '20px' : '5px')};
  /* box-shadow: 1px 1px 3px 0 #00000030; */

  cursor: pointer;
  -webkit-appearance: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;

  :hover {
    background: ${({ color, theme }) => (color ? color : theme.accent)};
    transition: 0.5s ease-in-out;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.brand};
  }

  ${({ light, color, theme }) =>
    light &&
    css`
      background: transparent;
      border-color: ${color ? color : theme.accent};
      color: ${color ? color : theme.accent};
      opacity: ${color ? 1 : 0.6};

      :hover {
        background: ${color ? color : theme.accent};
        color: ${theme.textButton};
        opacity: 1;
      }
    `}
`;

const ButtonIcon = styled(FontAwesomeIcon)``;

const ButtonText = styled.span`
  flex: 1 1;
  font-family: Inter, sans-serif;
  font-weight: 500;

  /* * Desktop
  @media screen and (max-width: 992px) {
    display: none;
  } */
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.icon && <ButtonIcon icon={props.icon} />}
      {props.text && <ButtonText>{props.text}</ButtonText>}
    </StyledButton>
  );
};

export default Button;
