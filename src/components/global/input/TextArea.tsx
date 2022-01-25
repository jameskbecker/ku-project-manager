// import React from 'react';
// import styled from 'styled-components';
// import theme from '../../../theme';
// import { Field } from './Input';

// export const StyledTextArea = styled.textarea<any>`
//   flex: 1 1 auto;

//   position: relative;
//   min-height: 5rem;
//   min-width: 0;

//   text-indent: ${({ icon }) => (icon ? '1rem' : 'none')};
//   font-family: inherit;
//   font-size: 0.75rem;
//   color: ${theme.subtext};
//   background: ${theme.secondary};
//   border: 1px solid ${theme.highlight};
//   border-radius: 3px;
//   box-sizing: border-box;
//   padding: 0.75rem;

//   resize: vertical;

//   :focus {
//     outline: 0;
//   }

//   :disabled {
//     background: ${theme.disabled};
//   }
// `;

// const TextArea = (props) => {
//   return (
//     <Field>
//       {props.label && <label>{props.label}</label>}
//       <StyledTextArea {...props} />;
//     </Field>
//   );
// };

// export default TextArea;
