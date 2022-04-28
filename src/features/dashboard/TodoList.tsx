import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import React from 'react';
import { useGetTodoQuery } from '../api/apiSlice';
import TodoPanel from './TodoPanel';

const TodoList = () => {
  const { data: todo, isLoading, refetch: refetchTodo } = useGetTodoQuery(null);

  if (isLoading) {
    return <DataPlaceholder>Loading...</DataPlaceholder>;
  }

  if (todo.data.length < 1) {
    return <DataPlaceholder>No Recent Notifications</DataPlaceholder>;
  }
  return (
    <ScrollContainer>
      {todo.data.map((data: any) => (
        <TodoPanel key={data.id} data={data} />
      ))}
    </ScrollContainer>
  );
};

export default TodoList;
