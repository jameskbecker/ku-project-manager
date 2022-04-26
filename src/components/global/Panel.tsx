import { FlexColumn, FlexRow } from '@/components/global/Flex';
import React from 'react';
import styled, { css } from 'styled-components';

type PanelProps = {
  heading?: String;
  children: React.ReactNode;
  Options?: any;
  secondary?: boolean;
  light?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const StyledPanel = styled(FlexColumn)<PanelProps>`
  flex: 0 1;

  padding: 0.75rem;
  border: 2px solid #ffffff00;
  box-sizing: content-box;
  border-radius: 0.75rem;
  font-weight: 400;

  background: ${({ secondary, theme }) =>
    secondary ? theme.secondary : theme.primary};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  overflow: visible;

  ${({ onClick, light }) =>
    onClick &&
    css`
      :hover {
        background: ${({ theme }) => theme.highlight};
        transition: 0.5s ease-out;
      }
    `}
`;

const Panel = (props: PanelProps) => {
  return (
    <StyledPanel {...props}>
      {(props.heading || props.Options) && (
        <FlexRow style={{ flex: '0 0 auto' }}>
          {props.heading && (
            <h3 style={{ flex: '1 0 auto' }}>{props.heading}</h3>
          )}
          {props.Options && props.Options}
        </FlexRow>
      )}

      {props.children}
    </StyledPanel>
  );
};

export default Panel;
