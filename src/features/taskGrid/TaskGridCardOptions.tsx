import { SecondaryButton } from '@kupm/common/Button';
import ContextMenu from '@kupm/common/ContextMenu';
import { useDispatch } from 'react-redux';
import { useDeleteTaskMutation } from '@kupm/features/api/taskApiSlice';
import {
  selectTask,
  toggleAddComment,
  toggleNewTask,
} from '../tasks/tasksSlice';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { faCheckSquare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FlexRow } from '@kupm/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const StyledTaskGridCardOptions = styled(FlexRow)`
  overflow: visible;
`;

const TaskGridCardOptions = ({ taskId, isComplete }: any) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [deleteTask] = useDeleteTaskMutation();

  const handleEdit = (e: any) => {
    e.stopPropagation();
    dispatch(selectTask(taskId));
    dispatch(toggleNewTask());
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteTask({ id: taskId });
  };

  const handleAddComment = () => dispatch(toggleAddComment());
  const toggleIsDone = (e: any) => e.stopPropagation();

  return (
    <StyledTaskGridCardOptions>
      <FontAwesomeIcon
        icon={isComplete ? faCheckSquare : faSquare}
        color={theme.brand}
        onClick={toggleIsDone}
      />
      <ContextMenu
        items={[
          { label: 'Add Comment', onClick: handleAddComment },
          { label: 'Edit', onClick: handleEdit },
          { label: 'Delete', onClick: handleDelete, color: theme.error },
        ]}
      >
        <SecondaryButton secondary icon={faEllipsisV} />
      </ContextMenu>
    </StyledTaskGridCardOptions>
  );
};

export default TaskGridCardOptions;
