import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexColumn } from '@kupm/common/Flex';
import { TableHeader } from '@kupm/common/Table';
import { useGetProjectsQuery } from '@kupm/features/api/apiSlice';
import ProjectTableRow from '@kupm/features/projectTable/ProjectTableRow';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const columns: any[] = [
  { name: '', size: '2.5%' },
  { name: 'Name', size: '20%' },
  { name: 'Description', size: '30%' },
  { name: 'Created by', size: '20%' },
  { name: 'Due Date', size: '15%' },
  { name: 'Actions', size: '5%' },
];

const DataPlaceholder = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectTable = (props: any) => {
  const { filter } = useSelector((state: any) => state.projects);
  const { data: projects, isLoading } = useGetProjectsQuery(null);

  const filteredData = projects?.data.filter(
    (t: any) =>
      (props.complete ? !!t.isComplete : !t.isComplete) &&
      (t.name?.toLowerCase().includes(filter.toLowerCase()) ||
        // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
        t.description?.toLowerCase().includes(filter.toLowerCase()))
  );

  let content;
  if (isLoading) {
    content = (
      <DataPlaceholder>
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      </DataPlaceholder>
    );
  } else if (projects?.data.length === 0) {
    console.log(projects);
    content = <DataPlaceholder>No Projects Yet</DataPlaceholder>;
  } else {
    const getProjects = filteredData.map((p: any, i: number) => (
      <ProjectTableRow key={i} project={p} />
    ));
    content = (
      <FlexColumn
        style={{
          overflow: 'auto',
          gap: '0.5rem',
          flex: '1 1',
        }}
      >
        {getProjects}
      </FlexColumn>
    );
  }
  return (
    <FlexColumn
      style={{
        justifyContent: 'flex-start',
        flex: '1 1',
      }}
    >
      <h3>{props.complete ? 'Complete' : 'Incomplete'}</h3>
      <TableHeader columns={columns} />
      {content}
    </FlexColumn>
  );
};

export default ProjectTable;
