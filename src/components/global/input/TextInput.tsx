import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { Field, InputIcon, InputProps } from './Input';

export const StyledInput = styled.input<any>`
  flex: 1 1 auto;
  height: 34px;

  position: relative;
  min-width: 0;

  text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};
  font-size: 0.75rem;
  color: grey;
  background: ${theme.primaryA};
  border: 1px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0.75rem;

  opacity: 0.9;
  :focus {
    outline: 0;
    border-color: ${theme.primary}80;
    opacity: 1;
  }

  :disabled {
    background: ${theme.sidebar};
    cursor: not-allowed;
  }

  ::placeholder {
    color: grey;
  }
`;

const TextInput = (props: InputProps) => {
  return (
    <Field>
      {props.icon && <InputIcon icon={props.icon} />}
      {props.label && <label>{props.label}</label>}
      <StyledInput {...props} />
    </Field>
  );
};

export default TextInput;
