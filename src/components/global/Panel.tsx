import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { FlexColumn } from './Flex';

type PanelProps = {
  heading?: String;
  children: React.ReactNode;
  secondary?: boolean;
  light?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const PanelWrapper = styled(FlexColumn)<PanelProps>`
  flex: 1 0 auto;
  padding: 0.75rem;
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 0.5em;

  background: ${({ secondary }) =>
    secondary ? theme.secondaryA : theme.primaryA};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  overflow: auto;

  ${({ onClick, light }) =>
    onClick &&
    css`
      :hover {
        ${!light
          ? css`
              background: ${theme.highlight};
            `
          : css`
              border-color: ${theme.highlight};
            `}
        transition: 0.5s ease-out;
      }
    `}

  div {
    font-size: 0.8rem;
  }

  h3 {
    margin: 0;
  }
`;

const Panel = (props: PanelProps) => {
  return (
    <PanelWrapper {...props}>
      {props.heading && <h3>{props.heading}</h3>}
      {props.children}
    </PanelWrapper>
  );
};

export default Panel;
