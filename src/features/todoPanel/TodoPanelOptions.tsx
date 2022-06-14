import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/button';
import { useGetTodoQuery } from '@kupm/features/api/userApiSlice';
import React from 'react';

const TodoPanelOptions = () => {
  const { refetch } = useGetTodoQuery(null);
  return <SecondaryButton secondary icon={faSyncAlt} onClick={refetch} />;
};

export default TodoPanelOptions;
