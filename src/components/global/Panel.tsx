import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type PanelProps = {
  heading: String;
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const PanelWrapper = styled.div<PanelProps>`
  margin: 1em;
  padding: 1em;
  border-radius: 0.5em;
  background: linear-gradient(
    45deg,
    ${({ secondary }) => (secondary ? theme.secondaryA : theme.primaryA)} 0%,
    ${({ secondary }) => (secondary ? theme.secondaryB : theme.primaryB)} 100%
  );

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  overflow: auto;

  ${({ onClick }) =>
    onClick &&
    `
    :hover {
      transform: scale(1.02);
      transition: 0.25s ease-in-out;
    }
  `}

  & > * {
    margin: 0.5em 0;
  }

  h3 {
    margin: 0;
  }
`;

const Panel = (props: PanelProps) => {
  return (
    <PanelWrapper {...props}>
      <h3>{props.heading}</h3>
      {props.children}
    </PanelWrapper>
  );
};

export default Panel;
