import { InputProps, InputWrapper } from '@kupm/common/input/Input';
import React, { useState } from 'react';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';

export const StyledReactSelect = styled(ReactSelect)`
  overflow: visible;

  //Main wrapper element
  .Select__control {
    flex-wrap: nowrap;
    min-height: 0;

    font-size: 1rem;

    border: 0;
    border-radius: 0.5rem !important;
    box-sizing: border-box;
    padding: 0rem;

    box-shadow: none;
    overflow: visible;

    background: ${({ isDisabled, theme }) =>
      isDisabled ? theme.disabled : theme.secondary};
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }

  .Select__control--is-disabled {
    color: ${({ theme }) => theme.textBody};
  }

  .Select__control,
  .Select__value-container {
    /* max-height: 34px; */
  }

  .Select__control:hover {
    border-color: transparent;
    transition: 0.25s ease-in-out;
  }

  .Select__menu,
  .Select__menu-list,
  .Select__value-container,
  .Select__placeholder,
  .Select__input-container,
  .Select__indicator,
  .Select__singleValue,
  .Select__dropdown-indicator {
    padding: 0;
  }

  .Select__menu {
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.sidebar};
    overflow: hidden;
  }

  .Select__menu-list {
    /* border: 1px solid ${({ theme }) => theme.highlight}; */
    box-sizing: border-box;

    padding: 0 5px;
    overflow: auto;
  }

  .Select__option,
  .Select__menu-notice,
  .Select__dropdown-indicator,
  .Select__input-container,
  .Select__multi-value__label,
  .Select__single-value,
  .Select__placeholder {
    font-size: 1rem;
    /* color: ${({ theme }) => theme.text}; */
  }

  .Select__input-container {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5rem 0rem;
  }

  .Select__single-value {
    /* grid-area: none; */
    color: ${({ theme }) => theme.text};
  }

  .Select__option {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    margin: 5px 0;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .Select__option--is-focused {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.text};
  }

  .Select__value-container {
    padding: 0.5rem;
  }

  .Select__input-container {
    padding: 0.23rem;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    /* min-width: 0.875rem; */
    height: 0.875rem;
    overflow: hidden;

    svg,
    svg > path {
      /* min-width: 0.875rem; */
      height: 0.875rem;
      fill: ${({ theme }) => theme.textBrand};
    }
  }

  .Select__indicators {
    background: ${({ theme }) => theme.brand};
    padding: 0.5rem;
    margin: 0;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .Select__option--is-selected {
    color: ${({ theme }) => theme.textBrand};
    background: ${({ theme }) => theme.brand};
    cursor: pointer;
  }

  // Input element used for searching through options
  .Select__input {
    color: ${({ theme }) => theme.text} !important;
  }
`;

const SelectInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (option: any) => {
    setValue(option);
    props.onChange({ name: props.name, value: option });
  };

  return (
    <InputWrapper ff={props}>
      {props.label && <label>{props.label}</label>}
      <StyledReactSelect
        {...props}
        onChange={handleChange}
        value={value}
        isDisabled={props.disabled}
        classNamePrefix="Select"
        isSearchable={false}
      />
    </InputWrapper>
  );
};

export default SelectInput;

export const Option = components.Option;
