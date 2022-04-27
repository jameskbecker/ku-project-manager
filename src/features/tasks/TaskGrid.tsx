import DataPlaceholder from '@kupm/common/DataPlaceholder';
import { FlexColumn } from '@kupm/common/Flex';
import TaskGridCard from '@kupm/features/tasks/TaskGridCard';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useGetProjectTasksQuery } from '../api/apiSlice';
import { useParams } from 'react-router-dom';

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

  overflow: auto;
`;

const TaskGrid = () => {
  const { id } = useParams<any>();
  const { filter } = useSelector((state: any) => state.tasks);
  const { data: taskResponse, isLoading } = useGetProjectTasksQuery({ id });

  let content;

  if (isLoading) {
    content = (
      <DataPlaceholder>
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      </DataPlaceholder>
    );
  } else if (taskResponse.data.tasks.length < 1) {
    content = <DataPlaceholder>No Tasks Yet</DataPlaceholder>;
  } else {
    const filteredData = taskResponse.data.tasks.filter(
      (t: any) =>
        t.name?.toLowerCase().includes(filter.toLowerCase()) ||
        // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
        t.description?.toLowerCase().includes(filter.toLowerCase())
    );
    content = (
      <Wrapper>
        {filteredData.map((p: any, i: number) => (
          <TaskGridCard key={i} task={p} />
        ))}
      </Wrapper>
    );
  }

  return <StyledTaskGrid>{content}</StyledTaskGrid>;
};

export default TaskGrid;
