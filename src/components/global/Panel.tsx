import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { FlexColumn } from './Flex';

type PanelProps = {
  heading?: String;
  children: React.ReactNode;
  secondary?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const PanelWrapper = styled(FlexColumn)<PanelProps>`
  flex: 1 0 auto !important;

  padding: 1em;
  border-radius: 0.5em;
  background-color: ${({ secondary }) =>
    secondary ? theme.secondaryA : theme.primaryA};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  overflow: auto;

  ${({ onClick, secondary }) =>
    onClick &&
    css`
      :hover {
        background-color: ${!secondary ? theme.secondaryA : theme.primaryA};
        transition: 0.5s ease-in-out;
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
