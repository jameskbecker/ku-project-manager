import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { FlexColumn } from './Flex';
import Separator from './Separator';

type PanelProps = {
  heading?: String;
  children: React.ReactNode;
  secondary?: boolean;
  light?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const StyledPanel = styled(FlexColumn)<PanelProps>`
  flex: 1 0 auto;
  padding: 0.75rem;
  border: 2px solid #ffffff00;
  box-sizing: border-box;
  border-radius: 0.5rem;
  font-weight: 400;

  background: ${({ secondary }) =>
    secondary ? theme.secondary : theme.primary};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  overflow: auto;

  ${({ onClick, light }) =>
    onClick &&
    css`
      :hover {
        background: ${theme.highlight};
        transition: 0.5s ease-out;
      }
    `}
`;

const Panel = (props: PanelProps) => {
  return (
    <StyledPanel {...props}>
      {props.heading && <h3 style={{ flex: '0 0 auto' }}>{props.heading}</h3>}
      {props.children}
    </StyledPanel>
  );
};

export default Panel;
