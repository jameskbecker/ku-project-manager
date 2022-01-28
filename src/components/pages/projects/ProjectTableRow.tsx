import {
  faPencilAlt,
  faSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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

const Wrapper = styled(Panel)`
  white-space: nowrap;
  text-overflow: ellipsis;

  & > * {
    text-align: left;
    flex: 1 1;
  }

  svg {
    opacity: 0.8;
  }

  svg:hover {
    opacity: 1;
    transition: 0.25s ease-in-out;
  }

  color: ${theme.textBody};

  :hover {
    color: ${theme.text};
    transition: 0.25s ease-in-out;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const ProjectTableRow = ({ project }: any) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelect = () => {
    history.push(`/projects/${project.id}`);
  };

  const handleEdit = (e: any) => {
    e.stopPropagation();
    dispatch(selectProject(project.id));
    dispatch(toggleNewProject());
  };

  const handleDelete = async (e: any) => {
    e.stopPropagation();
    console.log(project.id);
    dispatch(deleteProject({ id: project.id }));
    dispatch(fetchAllProjects());
  };

  return (
    <Wrapper onClick={handleSelect}>
      {/* <div>
        <FontAwesomeIcon icon={faSquare} />
      </div> */}
      {/* <div>{project.priority}</div> */}
      <div>{project.name}</div>
      <div>{project.description}</div>
      <div>{new Date(project.createdAt * 1000).toLocaleString()}</div>
      <div>{project.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <FlexRow style={{ justifyContent: 'flex-start' }}>
        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </FlexRow>
    </Wrapper>
  );
};
export default ProjectTableRow;
