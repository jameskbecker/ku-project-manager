import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import { Field, InputIcon, InputProps } from './Input';

export const StyledInput = styled.input<any>`
  flex: 0 0 auto;

  position: relative;
  min-width: 0;

  text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};
  font-size: 0.875rem;
  color: ${theme.text};
  background: ${theme.primaryA};
  border: 1px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;

  opacity: 0.9;

  :focus {
    outline: 0;
    //border-color: ${theme.primary}80;
    opacity: 1;
  }

  label {
    font-size: 1rem;
  }

  ::placeholder,
  svg {
    font-size: 0.875rem;
    color: ${theme.textBody};
  }
`;

const TextInput = (props: InputProps) => {
  if (props.type === 'hidden') {
    return <StyledInput {...props} />;
  }

  return (
    <Field {...props}>
      {props.icon && <InputIcon icon={props.icon} color="grey" />}
      {props.label && <label>{props.label}</label>}
      <StyledInput {...props} />
    </Field>
  );
};

export default TextInput;
