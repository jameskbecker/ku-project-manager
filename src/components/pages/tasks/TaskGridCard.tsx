import {
  faEllipsisV,
  faPencilAlt,
  faTrash,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  deleteProject,
  fetchAllProjects,
  selectProject,
  toggleNewProject,
} from '../../../store/projects';
import theme from '../../../theme';
import { FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';
import ContextMenu from '../../global/ContextMenu';

const Wrapper = styled(Panel)`
  flex-direction: column;
  gap: 0.25rem;

  & > :last-child {
    flex: 1 1;
  }

  color: ${theme.textBody};

  h3,
  svg {
    font-size: 1.125rem;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 500;
    color: #b2b2b2;
  }

  svg {
    flex: 0 0 auto;
  }

  h3 {
    flex: 1 1 auto;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.75rem;
    overflow: hidden;
    font-weight: 400;
    word-break: break-word;
    white-space: normal;
    text-overflow: ellipsis;
    color: ${theme.textBody};
  }
`;

const MoreButton = styled(FontAwesomeIcon)`
  color: #999999;
`;

const TaskGridCard = ({ task }: any) => {
  const [isDone, setIsDone] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelect = () => {
    history.push(`/projects/${task.projectId}/${task.id}`);
  };

  const handleMore = (e: any) => {
    e.stopPropagation();
    setShowMore(!showMore);
    //dispatch(selectProject(project.id));
    //dispatch(toggleNewProject());
  };

  const toggleIsDone = (e: any) => {
    e.stopPropagation();
    setIsDone(!isDone);
  };

  return (
    <Wrapper key={task.id} onClick={handleSelect} light>
      {/* <div>{project.priority}</div> */}
      <FlexRow style={{ overflow: 'visible' }}>
        <h3>{task.name}</h3>
        <FontAwesomeIcon
          icon={isDone ? faCheckSquare : faSquare}
          color={'#cccccc'}
          onClick={toggleIsDone}
        />
        <MoreButton icon={faEllipsisV} onClick={handleMore} />

        {/* <ContextMenu isOpen={true}>
          <MoreButton icon={faEllipsisV} onClick={handleMore} />
          <div>Test</div>
        </ContextMenu> */}
      </FlexRow>

      <h4>{new Date(task.dueAt * 1000).toLocaleString()}</h4>

      <p>{task.description}</p>
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
