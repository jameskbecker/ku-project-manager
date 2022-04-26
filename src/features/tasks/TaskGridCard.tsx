import { SecondaryButton } from '@kupm/common/Button';
import ContextMenu from '@kupm/common/ContextMenu';
import { FlexRow } from '@kupm/common/Flex';
import Panel from '@kupm/common/Panel';
import {
  deleteTask,
  fetchProjectTasks,
  saveTask,
  selectTask,
  toggleAddComment,
  toggleNewTask,
} from '@kupm/features/tasks/tasksSlice';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

const Wrapper = styled(Panel)<any>`
  /* display: grid;
  grid-template-columns: auto repeat(2, min-content);
  grid-auto-rows: auto auto minmax(0, 1fr); */
  gap: 0.5rem;
  align-items: flex-start;

  & > :last-child {
    flex: 1 1;
  }

  color: ${({ theme }) => theme.textBody};

  h3,
  svg {
    font-size: 1.125rem;
  }

  svg {
    flex: 0 0 auto;
  }
`;

const MoreButton = styled(FontAwesomeIcon)`
  color: #999999;
`;

const TaskGridCard = ({ task }: any) => {
  const theme = useContext(ThemeContext);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelect = () => {
    history.push(`/projects/${task.projectId}/${task.id}`);
  };

  const handleEdit = (e: MouseEvent<SVGSVGElement, any>) => {
    e.stopPropagation();
    dispatch(selectTask(task.id));
    dispatch(toggleNewTask());
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    dispatch(deleteTask({ id: task.id }));
    dispatch(fetchProjectTasks({ projectId: task.projectId }));
  };

  const handleMore = (e: any) => {
    e.stopPropagation();
    setShowMore(!showMore);
    //dispatch(selectProject(project.id));
    //dispatch(toggleNewProject());
  };

  const handleAddComment = () => {
    dispatch(toggleAddComment());
  };

  const toggleIsDone = (e: any) => {
    e.stopPropagation();
    dispatch(saveTask({ id: task.id, is_complete: !task.isComplete }));
    location.reload();
  };

  const OptionMenu = () => {
    return (
      <ContextMenu
        items={[
          { label: 'Add Comment', onClick: handleAddComment },
          { label: 'Edit', onClick: handleEdit },
          { label: 'Delete', onClick: handleDelete, color: theme.error },
        ]}
      >
        <SecondaryButton secondary icon={faEllipsisV} onClick={null} />
      </ContextMenu>
    );
  };

  return (
    <Wrapper
      key={task.id}
      draggable="true"
      onClick={handleSelect}
      style={{ overflow: 'visible' }}
    >
      {/* <div>{project.priority}</div> */}
      <FlexRow
        style={{
          width: '100%',
          justifyContent: 'spread-evenly',
          overflow: 'visible',
        }}
      >
        <h4 style={{ flex: '1 0' }}>{task.name}</h4>
        <FlexRow style={{ overflow: 'visible' }}>
          <FontAwesomeIcon
            icon={task.isComplete ? faCheckSquare : faSquare}
            color={theme.brand}
            onClick={toggleIsDone}
          />
          <OptionMenu />
        </FlexRow>
      </FlexRow>

      {/* <FontAwesomeIcon
        icon={faPencilAlt}
        color={theme.textBody}
        onClick={handleEdit}
      />

      <FontAwesomeIcon
        icon={faTrash}
        color={theme.textBody}
        onClick={handleDelete}
      /> */}

      {/* <FlexRow style={{ gridRow: 'span 3' }}>
       
        
      </FlexRow> */}
      {/* <ContextMenu isOpen={true}>
          <MoreButton icon={faEllipsisV} onClick={handleMore} />
          <div>Test</div>
        </ContextMenu> */}

      <h5 style={{ gridColumn: 'span 2' }}>
        {new Date(task.createdAt).toLocaleString()}
      </h5>

      <p style={{ gridColumn: 'span 2' }}>{task.description}</p>
      {/* <div>{project.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <div>{new Date(project.createdAt).toLocaleString()}</div>
      <FlexRow style={{ justifyContent: 'flex-start' }}>
        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </FlexRow> */}
    </Wrapper>
  );
};
export default TaskGridCard;