import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexRow } from '@kupm/common/Flex';
import Panel from '@kupm/common/Panel';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import TaskGridCardOptions from './TaskGridCardOptions';

const StyledTaskGridCard = styled(Panel)<any>`
  gap: 0.5rem;
  align-items: flex-start;
  overflow: visible;

  & > :last-child {
    flex: 1 1;
  }

  color: ${({ theme }) => theme.textBody};

  h3,
  svg {
    font-size: 1.125rem;
  }

  svg {
    flex: 0 0 auto;
  }
`;

const TaskGridCard = ({ task }: any) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();

  const handleSelect = () => {
    history.push(`/projects/${task.projectId}/${task.id}`);
  };

  return (
    <StyledTaskGridCard onClick={handleSelect}>
      <FlexRow
        style={{
          width: '100%',
          justifyContent: 'spread-evenly',
          overflow: 'visible',
        }}
      >
        <h4 style={{ flex: '1 0' }}>{task.name}</h4>
        <TaskGridCardOptions taskId={task.id} isComplete={task.isComplete} />
      </FlexRow>

      <h5>{new Date(task.createdAt).toLocaleString()}</h5>
      <p>{task.description}</p>
    </StyledTaskGridCard>
  );
};
export default TaskGridCard;
