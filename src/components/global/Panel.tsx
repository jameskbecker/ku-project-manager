import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type PanelProps = {
  heading: String;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const PanelWrapper = styled.div`
  height: 35vh;

  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
  background: linear-gradient(
    45deg,
    ${theme.primaryA} 0%,
    ${theme.primaryB} 100%
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
`;

const Panel = (props: PanelProps) => {
  return (
    <PanelWrapper onClick={props.onClick}>
      <h3>{props.heading}</h3>
      {props.children}
    </PanelWrapper>
  );
};

export default Panel;
