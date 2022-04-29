import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import { useGetTodoQuery } from '@kupm/features/api/apiSlice';
import TodoListItem from '@kupm/features/todoPanel/TodoListItem';
import React from 'react';

const TodoList = () => {
  const { data: todo, isLoading } = useGetTodoQuery(null);

  if (isLoading) {
    return <DataPlaceholder>Loading...</DataPlaceholder>;
  }

  if (todo.data.length < 1) {
    return <DataPlaceholder>No Recent Notifications</DataPlaceholder>;
  }
  return (
    <ScrollContainer>
      {todo.data.map((data: any) => (
        <TodoListItem key={data.id} data={data} />
      ))}
    </ScrollContainer>
  );
};

export default TodoList;
