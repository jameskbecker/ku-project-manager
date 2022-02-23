import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { InputWrapper } from './Input';

export const StyledTextArea = styled.textarea<any>`
  flex: 0 1 auto;

  position: relative;
  min-height: 6rem;
  min-width: 0;

  text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};

  font-family: inherit;
  font-size: 1rem;
  color: ${theme.text};
  background: ${theme.secondary};
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;

  resize: vertical;

  label {
    font-size: 1rem;
    min-height: 1rem;
  }

  :focus {
    outline: 0;
    opacity: 1;
    transition: 0.25s ease-in-out;
  }

  :disabled {
    background: ${theme.disabled};
  }
`;

const TextArea = (props: any) => {
  return (
    <InputWrapper {...props}>
      {props.label && <label>{props.label}</label>}
      <StyledTextArea {...props} />
    </InputWrapper>
  );
};

export default TextArea;
