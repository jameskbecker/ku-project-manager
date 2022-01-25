import { faSpinner, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../global/Flex';
import ProjectTableRow from './ProjectTableRow';

const TableHeader = styled(FlexRow)`
  display: none;
  flex: 0 1 auto;
  padding: 1rem;
  font-weight: 600;
  justify-content: flex-start;

  & > * {
    flex: 1 1;
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;
const ProjectTable = () => {
  const { isLoading, data } = useSelector((state: any) => state.projects);
  const getProjects = data.map((p: any, i: number) => (
    <ProjectTableRow key={i} project={p} />
  ));

  return (
    <FlexColumn
      style={{
        justifyContent: 'flex-start',
      }}
    >
      <TableHeader>
        <div>
          <FontAwesomeIcon icon={faSquare} />
        </div>
        {/* <div>Priority</div> */}
        <div>Name</div>
        <div>Description</div>
        <div>Status</div>
        <div>Date Created</div>
        <div>Actions</div>
      </TableHeader>
      {isLoading === false ? (
        <FlexColumn
          style={{
            overflow: 'auto',
          }}
        >
          {getProjects}
        </FlexColumn>
      ) : (
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      )}
    </FlexColumn>
  );
};

export default ProjectTable;
