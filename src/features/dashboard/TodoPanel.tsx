import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import Panel from '@kupm/common/Panel';
import { useGetTodoQuery } from '@kupm/features/api/apiSlice';
import TodoList from '@kupm/features/dashboard/TodoList';
import React from 'react';

const TodoPanel = () => {
  const { refetch } = useGetTodoQuery(null);

  const TodoPanelOptions = () => {
    return (
      <SecondaryButton
        secondary
        icon={faSyncAlt}
        onClick={refetch}
        round
        light
      />
    );
  };

  return (
    <Panel
      heading="Tasks Todo"
      style={{ gridRow: 'span 2' }}
      Options={TodoPanelOptions}
    >
      <TodoList />
    </Panel>
  );
};

export default TodoPanel;
