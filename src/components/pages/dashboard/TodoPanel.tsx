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

  p {
    white-space: nowrap;
  }
`;

const TodoPanel = ({ data }: any) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/projects/${data.projectId}/${data.id}`);
  };

  return (
    <StyledTodoPanel secondary key={data.id} onClick={handleClick}>
      <h4>{data.heading}</h4>
      <h5>{data.subHeading}</h5>
      <p>{data.body}</p>
    </StyledTodoPanel>
  );
};

export default TodoPanel;
