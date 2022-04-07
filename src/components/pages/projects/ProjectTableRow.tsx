import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCheckCircle,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDistance } from 'date-fns';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import {
  deleteProject,
  fetchAllProjects,
  saveProject,
  selectProject,
  toggleNewProject,
} from '../../../store/projects';
import { SecondaryButton } from '../../global/Button';
import Panel from '../../global/Panel';
import { TableCell } from '../../global/Table';

const Wrapper = styled(Panel)`
  gap: 1rem;

  color: ${({ theme }) => theme.textBody};
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1rem;

  :hover {
    color: ${({ theme }) => theme.text};
    transition: 0.5s ease-in-out;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const ProjectTableRow = ({ project }: any) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelect = () => {
    history.push(`/projects/${project.id}`);
  };

  const handleComplete = (e: any) => {
    e.stopPropagation();
    dispatch(saveProject({ id: project.id, is_complete: !project.isComplete }));
    dispatch(fetchAllProjects());
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
      <TableCell size={2.5}>
        <FontAwesomeIcon
          icon={project.isComplete ? faCheckCircle : faCircle}
          color={theme.brand}
          style={{ fontSize: '0.875rem' }}
          onClick={handleComplete}
        />
      </TableCell>
      {/* <div>{project.priority}</div> */}
      <TableCell size={20}>{project.name}</TableCell>
      <TableCell size={30}>{project.description}</TableCell>
      <TableCell size={20}>
        {project.owner}{' '}
        {formatDistance(new Date(project.createdAt), Date.now(), {
          addSuffix: true,
        })}
      </TableCell>
      <TableCell size={15}>
        {/* {format(new Date(project.createdAt), "do LLL y 'at' hh:mm aa")} */}
      </TableCell>

      <TableCell size={5}>
        <SecondaryButton secondary icon={faPencilAlt} onClick={handleEdit} />
        <SecondaryButton secondary icon={faTrash} onClick={handleDelete} />
      </TableCell>
    </Wrapper>
  );
};
export default ProjectTableRow;
