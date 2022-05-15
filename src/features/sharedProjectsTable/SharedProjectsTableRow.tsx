import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryButton } from '@kupm/common/Button';
import Panel from '@kupm/common/Panel';
import { TableCell } from '@kupm/common/Table';
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
  useUpdateProjectMutation,
} from '@kupm/features/api/apiSlice';
import { formatDistance } from 'date-fns';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

const Wrapper = styled(Panel)`
  gap: 1rem;

  color: ${({ theme }) => theme.textBody};
  text-overflow: ellipsis;
  padding: 1rem;

  overflow: visible;
  white-space: nowrap;

  :hover {
    color: ${({ theme }) => theme.text};
    transition: 0.5s ease-in-out;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const SharedProjectsTableRow = ({ project }: any) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const { refetch: refetchProjects } = useGetProjectsQuery(null);
  const [updateProject, { isLoading: isLoadingUpdate }] =
    useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  const handleSelect = () => {
    history.push(`/projects/${project.id}`);
  };

  const handleComplete = (e: any) => {
    e.stopPropagation();
    updateProject({ id: project.id, is_complete: !project.isComplete });
    refetchProjects();
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

      <TableCell size={20}>{project.name}</TableCell>
      <TableCell size={30}>{project.description}</TableCell>
      <TableCell size={20}>
        {project.owner}{' '}
        {formatDistance(new Date(project.createdAt), Date.now(), {
          addSuffix: true,
        })}
      </TableCell>
      <TableCell size={15}>{project.dueAt}</TableCell>

      <TableCell size={5} style={{ overflow: 'visible', gap: '0.5rem' }}>
        <SecondaryButton
          secondary
          icon={faSignOutAlt}
          color={theme.error}
          onClick={null}
        />
      </TableCell>
    </Wrapper>
  );
};
export default SharedProjectsTableRow;
