import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import React from 'react';
import { useGetTodoQuery } from '../api/apiSlice';
import TodoListItem from './TodoListItem';

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
