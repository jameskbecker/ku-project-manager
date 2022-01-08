// import React, { useState } from 'react';
// import ReactSelect, { components } from 'react-select';
// import styled from 'styled-components';
// import theme from '../../../theme';
// import { Field, InputProps } from './Input';

// export const StyledReactSelect = styled(ReactSelect)`
//   .Select__control {
//     flex-wrap: nowrap;
//     min-height: 0;

//     font-size: 0.75rem;
//     color: ${theme.subtext};
//     border: 1px solid ${theme.highlight};
//     border-radius: 3px;
//     box-sizing: border-box;
//     padding: 0.5rem;

//     box-shadow: none;

//     background-color: ${({ isDisabled }) =>
//       isDisabled ? theme.disabled : theme.secondary};
//     cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
//   }

//   .Select__menu {
//     background-color: ${theme.secondary};
//   }

//   .Select__control,
//   .Select__value-container {
//     max-height: 34px;
//   }

//   .Select__control:hover {
//     border-color: ${theme.info};
//     transition: 0.25s ease-in-out;
//   }

//   .Select__menu,
//   .Select__menu-list,
//   .Select__value-container,
//   .Select__placeholder,
//   .Select__input-container,
//   .Select__indicator,
//   .Select__singleValue,
//   .Select__dropdown-indicator {
//     padding: 0;
//   }

//   .Select__menu {
//     border: 1px solid ${theme.highlight};
//     box-sizing: border-box;
//   }

//   .Select__option,
//   .Select__menu-notice,
//   .Select__dropdown-indicator,
//   .Select__input-container,
//   .Select__multi-value__label,
//   .Select__single-value,
//   .Select__placeholder {
//     font-size: 0.75rem;
//     color: ${theme.subtext};
//   }

//   .Select__input-container {
//     margin-top: 0;
//     margin-bottom: 0;
//   }

//   .Select__single-value {
//     /* grid-area: none; */
//   }

//   .Select__option {
//     padding: 0.75rem;
//     cursor: pointer;
//   }

//   .Select__option--is-focused {
//     background-color: ${theme.info};
//     color: ${theme.text};
//   }

//   .Select__value-container {
//     padding: 0.2rem;
//   }

//   .Select__input-container,
//   .Select__multi-value__label {
//     padding: 0.23rem;
//   }

//   .Select__indicator-separator {
//     display: none;
//   }

//   .Select__indicator {
//     min-width: 0.75rem;
//     max-height: 0.75rem;
//   }

//   .Select__multi-value {
//     background-color: ${theme.highlight};
//   }

//   .Select__option--is-selected,
//   .Select__multi-value__remove:hover {
//     color: ${theme.text};
//     background-color: ${theme.info};
//     cursor: pointer;
//   }

//   svg,
//   svg > path,
//   svg > text {
//     fill: ${theme.subtext};
//   }
// `;

// const SelectInput = (props: InputProps) => {
//   const [value, setValue] = useState(props.value);

//   const handleChange = (option) => {
//     setValue(option);
//     props.onChange({ name: props.name, value: option });
//   };

//   return (
//     <Field>
//       {props.label && <label>{props.label}</label>}
//       <StyledReactSelect
//         {...props}
//         onChange={handleChange}
//         value={value}
//         isDisabled={props.disabled}
//         classNamePrefix="Select"
//       />
//     </Field>
//   );
// };

// export default SelectInput;

// export const Option = components.Option;
