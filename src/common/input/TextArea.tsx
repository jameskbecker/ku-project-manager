import { InputField, InputWrapper } from '@kupm/common/input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledTextArea = styled.textarea<any>`
  flex: 1 0 auto;

  position: relative;
  min-height: 6rem;
  min-width: 0;

  text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};

  font-family: inherit;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  border: none;
  box-sizing: border-box;
  padding: 0.5rem 0;

  resize: none;

  :focus {
    outline: 0;
    opacity: 1;
    transition: 0.25s ease-in-out;
  }

  :disabled {
    background: ${({ theme }) => theme.disabled};
  }
`;

const Counter = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;

  opacity: 0.6;
`;

const TextArea = (props: any) => {
  const [remainingCharacters, setRemainingCharacters] = useState(props.max);

  const handleOnChange = (e: any) => {
    if (e.nativeEvent.inputType === 'insertText') {
      setRemainingCharacters(remainingCharacters - 1);
    } else {
      setRemainingCharacters(remainingCharacters + 1);
    }
    props.onChange && props.onChange();
  };

  return (
    <InputWrapper {...props}>
      {props.label && <label>{props.label}</label>}
      <InputField>
        <StyledTextArea {...props} onChange={handleOnChange} />
        <Counter>{remainingCharacters}</Counter>
      </InputField>
    </InputWrapper>
  );
};

export default TextArea;
