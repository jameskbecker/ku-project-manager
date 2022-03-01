import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  deleteTask,
  fetchProjectTasks,
  saveTask,
  selectTask,
  toggleNewTask,
} from '../../../store/tasks';
import theme from '../../../theme';
import ContextMenu from '../../global/ContextMenu';
import { FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';

const Wrapper = styled(Panel)<any>`
  /* display: grid;
  grid-template-columns: auto repeat(2, min-content);
  grid-auto-rows: auto auto minmax(0, 1fr); */
  gap: 0.5rem;
  align-items: flex-start;

  & > :last-child {
    flex: 1 1;
  }

  color: ${theme.textBody};

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

  const toggleIsDone = (e: any) => {
    e.stopPropagation();
    dispatch(saveTask({ id: task.id, is_complete: !task.isComplete }));
    location.reload();
  };

  const handleDrag = (e: any) => {
    e.target.style.display = 'none';
    const switchElement = document.elementFromPoint(e.clientX, e.clientY);
    //@ts-ignore
    switchElement && (switchElement.style.backgroundColor = 'red');
    e.target.style.display = 'flex';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    //@ts-ignore
    e.target.style.display = 'flex';
  };

  const OptionMenu = () => {
    return (
      <ContextMenu
        items={[
          { label: 'Edit', onClick: handleEdit },
          { label: 'Delete', onClick: handleDelete },
        ]}
      >
        <MoreButton icon={faEllipsisV} />
      </ContextMenu>
    );
  };
  console.log(task);
  return (
    <Wrapper
      key={task.id}
      draggable="true"
      onClick={handleSelect}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
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
        {new Date(task.createdAt * 1000).toLocaleString()}
      </h5>

      <p style={{ gridColumn: 'span 2' }}>{task.description}</p>
      {/* <div>{project.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <div>{new Date(project.createdAt * 1000).toLocaleString()}</div>
      <FlexRow style={{ justifyContent: 'flex-start' }}>
        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </FlexRow> */}
    </Wrapper>
  );
};
export default TaskGridCard;
