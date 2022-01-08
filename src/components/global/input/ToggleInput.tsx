// import { FlexRow } from 'global/Flex';
// import React, { useState } from 'react';
// import ToggleOn from 'icons/toggle-on.svg';
// import ToggleOff from 'icons/toggle-off.svg';
// import styled from 'styled-components';
// import theme from '../../../theme';
// import { InputProps } from './Input';
// import { values } from 'lodash';

// const Wrapper = styled(FlexRow)<any>`
//   align-items: center;

//   cursor: pointer;

//   label {
//     flex: 1 1;
//     color: ${theme.text};
//     font-size: 0.625rem;
//     font-weight: 500;
//   }

//   div {
//     flex: 1 1;
//   }
// `;

// const Toggle = ({ value, label, onChange, name }: InputProps) => {
//   const [isChecked, setIsChecked] = useState(Boolean(value));

//   const toggle = () => {
//     setIsChecked(!isChecked); //false
//     onChange({ name, value: !isChecked });
//   };

//   return (
//     <Wrapper onClick={toggle}>
//       {isChecked ? <ToggleOn /> : <ToggleOff />}

//       {label && <label>{label}</label>}
//     </Wrapper>
//   );
// };

// export default Toggle;
