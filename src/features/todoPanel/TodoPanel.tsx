import Panel from '@kupm/common/Panel';
import TodoList from '@kupm/features/todoPanel/TodoList';
import TodoPanelOptions from '@kupm/features/todoPanel/TodoPanelOptions';
import React from 'react';
import styled from 'styled-components';

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
