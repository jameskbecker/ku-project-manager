import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import DataPlaceholder from '@kupm/common/DataPlaceholder';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import Panel from '@kupm/common/Panel';
import ScrollContainer from '@kupm/common/ScrollContainer';
import { useGetProjectActivityQuery } from '@kupm/features/api/apiSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledActivityFeed = styled(FlexColumn)`
  gap: 0.75rem;
  flex: 2 2;
  padding: 1rem;
  border-left: 1px solid ${({ theme }) => theme.secondary};

  /** Tablet & Mobile  */
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ActivityFeed = () => {
  const { id } = useParams<any>();
  const { selectedProject, activity } = useSelector(
    (state: any) => state.projects
  );
  const dispatch = useDispatch();
  const { data, isLoading, refetch } = useGetProjectActivityQuery({ id });

  let content;
  if (isLoading) {
    content = <DataPlaceholder>Loading</DataPlaceholder>;
  } else if (activity.length < 1) {
    content = <DataPlaceholder>No Activity</DataPlaceholder>;
  } else {
    content = (
      <ScrollContainer>
        {activity.map((a: any, i: number) => (
          <Panel key={i} style={{ gap: '0.5rem' }}>
            <h4>{a.heading}</h4>
            <h5>{a.subheading}</h5>
            <p>{a.body}</p>
          </Panel>
        ))}
      </ScrollContainer>
    );
  }

  return (
    <StyledActivityFeed>
      <FlexRow>
        <h3 style={{ flex: '1 1' }}>Activity Feed</h3>
        <SecondaryButton icon={faSyncAlt} onClick={refetch} />
      </FlexRow>
      {content}
    </StyledActivityFeed>
  );
};

export default ActivityFeed;
