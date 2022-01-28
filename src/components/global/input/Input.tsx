import { FlexColumn } from '../Flex';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../../theme';
// import NumberInput from './NumberInput';
// import SelectInput from './SelectInput';
// import TextArea from './TextArea';
// import TextInput from './TextInput';
// import Toggle from './ToggleInput';

export const Field = styled(FlexColumn)`
  flex: 1 1;
  width: 100%;

  position: relative;
  gap: 0.1875rem;

  overflow: hidden;

  label {
    font-size: 0.875rem;
  }

  :focus-within {
    svg {
      color: ${theme.text};
      transition: 0.25s ease-in-out;
    }
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  font-size: 0.875rem;

  padding-left: 0.5rem;

  z-index: 2;
`;

type Option = {
  label: string;
  value: string;
};

export type InputProps = {
  type?: 'text' | 'number' | 'select' | 'toggle' | 'textarea';
  label?: string;
  icon?: any;
  placeholder?: string | JSX.Element;
  value?: string | Option | Option[];
  onChange?: any;
  options?: any[];
  isMulti?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  step?: number;
  name?: string;
  style?: CSSProperties;
};

export const getInput = (type: string) => {
  switch (type) {
    // case 'select':
    //   return SelectInput;

    // case 'number':
    //   return NumberInput;

    // case 'textarea':
    //   return TextArea;

    // case 'toggle':
    //   return Toggle;

    case 'text':
    default:
      return TextInput;
  }

  // if (props.type === 'toggle') {
  //   return <Toggle {...props} />;
  // }

  // return (
  //   <Field>
  //     {props.icon && (
  //       <InputIcon>
  //         <props.icon />
  //       </InputIcon>
  //     )}
  //     {props.label && <label>{props.label}</label>}
  //     <GetInput />
  //   </Field>
  // );
};
