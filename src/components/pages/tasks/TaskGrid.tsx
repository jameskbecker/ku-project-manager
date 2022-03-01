import { faSpinner, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../global/Flex';
import TaskGridCard from './TaskGridCard';
import ProjectTableRow from './TaskGridCard';

const StyledTaskGrid = styled(FlexColumn)`
  justify-content: flex-start;
  flex: 3 1;
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 175px;
  gap: 0.75rem;
`;

const TableHeader = styled(FlexRow)`
  display: none;
  flex: 0 1 auto;
  padding: 1rem;
  font-weight: 600;
  justify-content: flex-start;

  & > * {
    flex: 1 1;
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
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
      {isLoading === false ? (
        <Wrapper
          style={{
            overflow: 'auto',
          }}
        >
          {getTasks}
        </Wrapper>
      ) : (
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      )}
    </StyledTaskGrid>
  );
};

export default TaskGrid;
