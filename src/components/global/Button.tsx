import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type ButtonProps = {
  color?: string;
  text?: string;
  icon?: IconProp;
};

const ButtonWrapper = styled.button<ButtonProps>`
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

  & > :nth-child(2) {
    margin: 0 0 0 0.5em;
  }
`;

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper {...props}>
      {props.icon && <FontAwesomeIcon icon={props.icon} color={theme.bg} />}
      {props.text && <span>{props.text}</span>}
    </ButtonWrapper>
  );
};

export default Button;
