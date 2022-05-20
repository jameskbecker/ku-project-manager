import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryButtonProps } from './types';
import { ButtonText } from './Button';

const StyledSecondaryButton = styled.button<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-width: 1.125rem;
  height: 1.625rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textBody};
  background: transparent;
  padding: 0 0.25rem;

  border: 0;
  box-sizing: content-box;
  border-radius: 0.25rem;

  cursor: pointer;
  -webkit-appearance: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;

  :hover {
    background: ${({ theme, secondary }) =>
      secondary ? theme.secondary : theme.primary};
    transition: 0.25s ease-in-out;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.brand};
  }
`;

const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <StyledSecondaryButton {...props}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.text && <ButtonText>{props.text}</ButtonText>}
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
