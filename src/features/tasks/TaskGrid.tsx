import { FlexColumn } from '@kupm/common/Flex';
import TaskGridCard from '@kupm/features/tasks/TaskGridCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

  overflow: auto;
`;

const TaskGrid = ({ data }: any) => {
  const { id } = useParams<any>();
  const { filter } = useSelector((state: any) => state.tasks);

  const filteredData = data.filter(
    (t: any) =>
      t.name?.toLowerCase().includes(filter.toLowerCase()) ||
      // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
      t.description?.toLowerCase().includes(filter.toLowerCase())
  );
  let content = (
    <Wrapper>
      {filteredData.map((p: any, i: number) => (
        <TaskGridCard key={i} task={p} />
      ))}
    </Wrapper>
  );

  return <StyledTaskGrid>{content}</StyledTaskGrid>;
};

export default TaskGrid;
