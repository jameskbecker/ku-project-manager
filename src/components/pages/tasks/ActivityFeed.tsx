import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { FlexColumn } from '../../global/Flex';
import Panel from '../../global/Panel';

const StyledActivityFeed = styled(FlexColumn)`
  gap: 0.75rem;
  flex: 2 2;
  padding: 1rem;
  border-left: 1px solid ${theme.secondary};
`;

const ActivityFeed = () => {
  return (
    <StyledActivityFeed>
      <h3>Activity Feed</h3>
      <FlexColumn>
        <Panel style={{ flex: '1 1', height: 'auto' }}>
          <h4>New Comment from Smith, John</h4>
          <h5>Something</h5>
          <p>I'll do all your work for you!</p>
        </Panel>
        <Panel style={{ flex: '1 1' }}>
          <h4>New Comment from Smith, John</h4>
          <h5>Something</h5>
          <p>I'll do all your work for you!</p>
        </Panel>
        <Panel style={{ flex: '1 1' }}>
          <h4>New Comment from Smith, John</h4>
          <h5>Something</h5>
          <p>I'll do all your work for you!</p>
        </Panel>
        <Panel style={{ flex: '1 1' }}>
          <h4>New Comment from Smith, John</h4>
          <h5>Something</h5>
          <p>I'll do all your work for you!</p>
        </Panel>
      </FlexColumn>
    </StyledActivityFeed>
  );
};

export default ActivityFeed;
