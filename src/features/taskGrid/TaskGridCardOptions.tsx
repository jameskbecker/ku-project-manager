import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryButton } from '@kupm/common/Button';
import ContextMenu from '@kupm/common/contextMenu/ContextMenu';
import { FlexRow } from '@kupm/common/Flex';
import { useDeleteTaskMutation } from '@kupm/features/api/taskApiSlice';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import { showAddCommentModal } from '../addCommentModal/addCommentSlice';
import { showNewTaskModal } from '../newTaskModal/newTaskModalSlice';
import { selectTask } from '../tasks/tasksSlice';

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
    dispatch(showNewTaskModal());
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteTask({ id: taskId });
  };

  const handleAddComment = () => dispatch(showAddCommentModal());
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
