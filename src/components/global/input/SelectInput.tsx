import React, { useState } from 'react';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';
import theme from '../../../theme';
import { Field, InputProps } from './Input';

export const StyledReactSelect = styled(ReactSelect)`
  overflow: visible;

  //Main wrapper element
  .Select__control {
    flex-wrap: nowrap;
    min-height: 0;

    font-size: 0.875rem;

    border: 1px solid transparent;
    border-radius: 5px !important;
    box-sizing: border-box;
    padding: 0;

    box-shadow: none;
    overflow: visible;

    background: ${({ isDisabled }) =>
      isDisabled ? theme.disabled : theme.primaryA};
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }

  .Select__control--is-disabled {
    color: ${theme.textBody};
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
    border-radius: 5px;
    background: ${theme.sidebar};
    overflow: hidden;
  }

  .Select__menu-list {
    /* border: 1px solid ${theme.highlight}; */
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
    font-size: 0.875rem;
    /* color: ${theme.text}; */
  }

  .Select__input-container {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5rem 0rem;
  }

  .Select__single-value {
    /* grid-area: none; */
    color: ${theme.text};
  }

  .Select__option {
    padding: 0.5rem 0.75rem;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
  }

  .Select__option--is-focused {
    background: ${theme.highlight};
    color: ${theme.text};
  }

  .Select__value-container {
    padding: 0.2rem;
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

    svg {
      /* min-width: 0.875rem; */
      height: 0.875rem;
    }
  }

  .Select__option--is-selected {
    color: ${theme.text};
    background: ${theme.highlight};
    cursor: pointer;
  }

  // Input element used for searching through options
  .Select__input {
    color: ${theme.text} !important;
  }

  svg,
  svg > path,
  svg > text {
    fill: ${theme.text};
  }
`;

const SelectInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (option: any) => {
    setValue(option);
    props.onChange({ name: props.name, value: option });
  };

  return (
    <Field ff={props}>
      {props.label && <label>{props.label}</label>}
      <StyledReactSelect
        {...props}
        onChange={handleChange}
        value={value}
        isDisabled={props.disabled}
        classNamePrefix="Select"
      />
    </Field>
  );
};

export default SelectInput;

export const Option = components.Option;
