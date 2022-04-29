import Panel from '@kupm/common/Panel';
import TodoList from '@kupm/features/dashboard/TodoList';
import React from 'react';
import styled from 'styled-components';
import TodoPanelOptions from './TodoPanelOptions';

const StyledTodoPanel = styled(Panel)`
  grid-row: span 2;
`;

const TodoPanel = () => {
  return (
    <StyledTodoPanel heading="Tasks Todo" Options={TodoPanelOptions}>
      <TodoList />
    </StyledTodoPanel>
  );
};

export default TodoPanel;
