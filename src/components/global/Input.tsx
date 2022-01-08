import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputElement = styled.input`
  padding: 0.5em;
  background-color: ${theme.secondaryA};
  -webkit-appearance: none;
  border: 0;
`;

type InputProps = {
  placeholder?: string;
  value?: string;
  type?: string;
  label: string;
};

const Input = ({ placeholder, value, label, type }: InputProps) => (
  <Wrapper>
    <label>{label}</label>
    <InputElement value={value} placeholder={placeholder} type={type} />
  </Wrapper>
);

export default Input;
