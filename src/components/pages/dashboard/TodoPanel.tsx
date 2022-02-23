import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import assignments from '../../../mock-data/assignment';
import { Task } from '../../../types';
import Panel from '../../global/Panel';

type TodoPanelProps = {
  todo: Task;
};

const StyledTodoPanel = styled(Panel)`
  flex: 0 0 auto;
  gap: 0.5rem;
`;

const TodoPanel = ({ todo }: TodoPanelProps) => {
  const history = useHistory();
  const [assignment] = assignments.filter((a) => a.id === todo.id);

  const handleClick = () => {
    history.push('/projects/');
  };

  return (
    <StyledTodoPanel secondary key={todo.id}>
      <h4>{todo.name}</h4>
      <h5>{assignment.name}</h5>
    </StyledTodoPanel>
  );
};

export default TodoPanel;
