import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Panel = styled.div`
  width: 100;
  height: 35vh;

  margin: 1em;
  border-radius: 0.5em;
  background-color: ${theme.primary};

  & > :first-child {
    font-weight: 600;
    padding: 0.5em;
  }

  li {
    padding: 0.5em;
  }
`;

export default Panel;
