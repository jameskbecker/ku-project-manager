import React from 'react';
import styled from 'styled-components';
import { InputField, InputIcon, InputProps, InputWrapper } from './Input';

export const StyledInput = styled.input<any>`
  flex: 1 0 auto;

  position: relative;
  min-width: 0;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  border: 0;
  background: transparent;
  padding: 0.5rem 0;

  :focus {
    outline: 0;
  }

  ::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.textBody};
  }
`;

const TextInput = (props: InputProps) => {
  if (props.type === 'hidden') {
    return <StyledInput {...props} />;
  }

  return (
    <InputWrapper {...props}>
      {props.label && <label>{props.label}</label>}
      <InputField>
        {props.icon && <InputIcon icon={props.icon} color="grey" />}
        <StyledInput {...props} />
      </InputField>
    </InputWrapper>
  );
};

export default TextInput;
