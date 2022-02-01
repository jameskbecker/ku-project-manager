import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { Field } from './Input';

export const StyledTextArea = styled.textarea<any>`
  flex: 0 1 auto;

  position: relative;
  min-height: 5rem;
  min-width: 0;

  text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};

  font-family: inherit;
  font-size: 0.875rem;
  color: ${theme.text};
  background: ${theme.primaryA};
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
  }

  :disabled {
    background: ${theme.disabled};
  }
`;

const TextArea = (props: any) => {
  return (
    <Field {...props}>
      {props.label && <label>{props.label}</label>}
      <StyledTextArea {...props} />
    </Field>
  );
};

export default TextArea;
