import {
  faCheckCircle,
  faPencilAlt,
  faSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
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
import { TableCell } from '../../global/Table';

const Wrapper = styled(Panel)`
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 0.75rem;

  & > * {
    text-align: left;
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

  const handleDelete = (e: any) => {
    e.stopPropagation();
    dispatch(deleteProject({ id: project.id }));
    dispatch(fetchAllProjects());
  };

  return (
    <Wrapper onClick={handleSelect}>
      <TableCell size={5}>
        <FontAwesomeIcon icon={project.isComplete ? faCheckCircle : faCircle} />
      </TableCell>
      {/* <div>{project.priority}</div> */}
      <TableCell size={20}>{project.name}</TableCell>
      <TableCell size={42.5}>{project.description}</TableCell>
      <TableCell size={20}>
        {new Date(project.createdAt * 1000).toLocaleString()}
      </TableCell>
      {/* <div>{project.isComplete ? 'Complete!' : 'Incomplete'}</div> */}
      <TableCell size={7.5}>
        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </TableCell>
    </Wrapper>
  );
};
export default ProjectTableRow;
