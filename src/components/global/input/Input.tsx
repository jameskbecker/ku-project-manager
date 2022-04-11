import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { FlexColumn, FlexRow } from '../Flex';
import TextInput from './TextInput';
// import NumberInput from './NumberInput';
// import SelectInput from './SelectInput';
// import TextArea from './TextArea';
// import TextInput from './TextInput';
// import Toggle from './ToggleInput';

export const InputWrapper = styled(FlexColumn)<any>`
  flex: 0 1 auto;
  width: 100%;

  position: relative;
  gap: 0.1875rem;

  overflow: visible;

  label {
    font-size: 0.75rem;
    font-weight: 500;
    flex: 1 0 auto;
  }

  :focus-within {
    svg {
      color: ${({ theme }) => theme.text};
      transition: 0.25s ease-in-out;
    }
  }

  ${({ disabled }: any) =>
    disabled &&
    css`
      label {
        color: ${({ theme }) => theme.textBody};
      }

      & :last-child {
        background: ${({ theme }) => theme.disabled};
        cursor: not-allowed;
      }
    `}
`;

export const InputField = styled(FlexRow)`
  flex: 0 0 auto;
  background: ${({ theme }) => theme.secondary};
  border: 1px solid transparent;
  border-radius: 0.5rem;
  gap: 0.5rem;
  box-sizing: border-box;

  padding: 0 0.5rem;

  opacity: 0.8;

  :focus-within {
    opacity: 1;
    transition: 0.25s ease-in-out;
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%); */

  font-size: 1rem;

  /* z-index: 2; */
`;

type Option = {
  label: string;
  value: string;
};

export type InputProps = {
  type?:
    | 'text'
    | 'number'
    | 'select'
    | 'toggle'
    | 'textarea'
    | 'hidden'
    | 'password'
    | 'datetime-local';
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
  //   <InputWrapper>
  //     {props.icon && (
  //       <InputIcon>
  //         <props.icon />
  //       </InputIcon>
  //     )}
  //     {props.label && <label>{props.label}</label>}
  //     <GetInput />
  //   </InputWrapper>
  // );
};
