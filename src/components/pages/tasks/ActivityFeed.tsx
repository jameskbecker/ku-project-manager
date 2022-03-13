import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchActivity } from '../../../store/projects';
import theme from '../../../theme';
import { FlexColumn, FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';

const StyledActivityFeed = styled(FlexColumn)`
  gap: 0.75rem;
  flex: 2 2;
  padding: 1rem;
  border-left: 1px solid ${theme.secondary};
`;

const ActivityFeed = () => {
  const { selectedProject, activity } = useSelector(
    (state: any) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivity({ id: '6f35f124-46d4-11ec-8b6c-d2f44fac733b' }));
  }, []);

  return (
    <StyledActivityFeed>
      <FlexRow>
        <h3 style={{ flex: '1 1' }}>Activity Feed</h3>
        <FontAwesomeIcon icon={faSyncAlt} />
      </FlexRow>

      <FlexColumn>
        {activity.map((a: any, i: number) => (
          <Panel key={i} style={{ flex: '1 1', gap: '0.5rem' }}>
            <h4>{a.heading}</h4>
            <h5>{a.subheading}</h5>
            <p>{a.body}</p>
          </Panel>
        ))}
      </FlexColumn>
    </StyledActivityFeed>
  );
};

export default ActivityFeed;
