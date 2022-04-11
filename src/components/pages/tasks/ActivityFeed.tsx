import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchActivity } from '../../../store/projects';
import { SecondaryButton } from '../../global/Button';
import DataPlaceholder from '../../global/DataPlaceholder';
import { FlexColumn, FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';
import ScrollContainer from '../../global/ScrollContainer';

const StyledActivityFeed = styled(FlexColumn)`
  gap: 0.75rem;
  flex: 2 2;
  padding: 1rem;
  border-left: 1px solid ${({ theme }) => theme.secondary};
`;

const ActivityFeed = () => {
  const { selectedProject, activity } = useSelector(
    (state: any) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivity({ id: '6f35f124-46d4-11ec-8b6c-d2f44fac733b' }));
  }, []);

  const handleActivityRefresh = () => {
    dispatch(fetchActivity({ id: '6f35f124-46d4-11ec-8b6c-d2f44fac733b' }));
  };

  return (
    <StyledActivityFeed>
      <FlexRow>
        <h3 style={{ flex: '1 1' }}>Activity Feed</h3>
        <SecondaryButton icon={faSyncAlt} onClick={handleActivityRefresh} />
      </FlexRow>
      {activity.length < 1 ? (
        <DataPlaceholder>No Activity</DataPlaceholder>
      ) : (
        <ScrollContainer>
          {activity.map((a: any, i: number) => (
            <Panel key={i} style={{ gap: '0.5rem' }}>
              <h4>{a.heading}</h4>
              <h5>{a.subheading}</h5>
              <p>{a.body}</p>
            </Panel>
          ))}
        </ScrollContainer>
      )}
    </StyledActivityFeed>
  );
};

export default ActivityFeed;
