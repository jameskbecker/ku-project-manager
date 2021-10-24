import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type PanelProps = {
  heading: String;
  children: React.ReactNode;
};

const PanelWrapper = styled.div`
  height: 35vh;

  margin: 1em;
  border-radius: 0.5em;
  background-color: ${theme.primary};

  overflow: auto;

  & > :first-child {
    font-weight: 600;
    padding: 0.5em;
  }

  li {
    padding: 0.5em;
  }
`;

const Panel = (props: PanelProps) => {
  return (
    <PanelWrapper>
      <h3>{props.heading}</h3>
      {props.children}
    </PanelWrapper>
  );
};

export default Panel;
