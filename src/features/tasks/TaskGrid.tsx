import DataPlaceholder from '@kupm/common/DataPlaceholder';
import { FlexColumn } from '@kupm/common/Flex';
import TaskGridCard from '@kupm/features/tasks/TaskGridCard';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledTaskGrid = styled(FlexColumn)`
  justify-content: flex-start;
  flex: 5 5;
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 175px;
  gap: 0.75rem;
`;

const TaskGrid = () => {
  const { isLoading, data, filter } = useSelector((state: any) => state.tasks);

  const filteredData = data.filter(
    (t: any) =>
      t.name?.toLowerCase().includes(filter.toLowerCase()) ||
      // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
      t.description?.toLowerCase().includes(filter.toLowerCase())
  );

  const getTasks = filteredData.map((p: any, i: number) => (
    <TaskGridCard key={i} task={p} />
  ));

  return (
    <StyledTaskGrid>
      {isLoading ? (
        <DataPlaceholder>
          <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
        </DataPlaceholder>
      ) : data.length < 1 ? (
        <DataPlaceholder>No Tasks Yet</DataPlaceholder>
      ) : (
        <Wrapper
          style={{
            overflow: 'auto',
          }}
        >
          {getTasks}
        </Wrapper>
      )}
    </StyledTaskGrid>
  );
};

export default TaskGrid;
