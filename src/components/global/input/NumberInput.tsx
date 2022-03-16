// import { FlexRow } from '../Flex';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { InputWrapper, InputProps } from './Input';
// import { StyledInput } from './TextInput';

// const NumberControlWrapper = styled(FlexRow)`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   padding-right: 0.5rem;
//   width: auto !important;
//   height: 34px;
// `;

// const NumberControl = styled.div`
//   flex: 0 0 auto;
//   min-width: 0;
//   width: auto !important;
//   height: auto;

//   color: grey;
//   background: white;
//   border-radius: 2px;
//   padding: 0rem 0.5rem;
//   margin: 0.25rem 0;

//   cursor: pointer;

//   :hover {
//     background: blue;
//     color: ${theme.text};
//     transition: 0.5s ease-in-out;
//   }
// `;

// const NumberInput = (props: any) => {
//   let [value, setValue] = useState(props.value || '');
//   const step = props.step ? props.step : 1;

//   const handleChange = (e) => {
//     setValue(e.target.value);
//     props.onChange({ name: props.name, value });
//   };

//   const handleIncrement = () => {
//     const oldInt = parseInt(value) || 0;
//     const newInt = oldInt + step;
//     setValue(newInt.toString());
//     props.onChange({ name: props.name, value });
//   };

//   const handleDecrement = () => {
//     const oldInt = parseInt(value) || 0;
//     const newInt = oldInt - step;
//     setValue(newInt.toString());
//     props.onChange({ name: props.name, value });
//   };

//   return (
//     <InputWrapper>
//       {props.label && <label>{props.label}</label>}
//       <StyledInput
//         {...props}
//         value={value}
//         onChange={handleChange}
//         type="number"
//       />

//       <NumberControlWrapper>
//         <NumberControl onClick={handleDecrement}>-</NumberControl>
//         <NumberControl onClick={handleIncrement}>+</NumberControl>
//       </NumberControlWrapper>
//     </InputWrapper>
//   );
// };

// export default NumberInput;
