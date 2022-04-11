import {
  faCircle,
  faSpinner,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../global/Flex';
import { TableHeader } from '../../global/Table';
import ProjectTableRow from './ProjectTableRow';

const columns: any[] = [
  { name: '', size: '2.5%' },
  { name: 'Name', size: '20%' },
  { name: 'Description', size: '30%' },
  { name: 'Created by', size: '20%' },
  { name: 'Due Date', size: '15%' },
  { name: 'Actions', size: '5%' },
];

const ProjectTable = () => {
  const { isLoading, data, filter } = useSelector(
    (state: any) => state.projects
  );

  const filteredData = data.filter(
    (t: any) =>
      t.name?.toLowerCase().includes(filter.toLowerCase()) ||
      // t.dueAt ?.toLowerCase().includes(filter.toLowerCase()) ||
      t.description?.toLowerCase().includes(filter.toLowerCase())
  );

  const getProjects = filteredData.map((p: any, i: number) => (
    <ProjectTableRow key={i} project={p} />
  ));

  return (
    <FlexColumn
      style={{
        justifyContent: 'flex-start',
        flex: '1 1',
      }}
    >
      <TableHeader columns={columns} />
      {isLoading && data.length === 0 ? (
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      ) : (
        <FlexColumn
          style={{
            overflow: 'auto',
            gap: '0.5rem',
            flex: '1 1',
          }}
        >
          {getProjects}
        </FlexColumn>
      )}
    </FlexColumn>
  );
};

export default ProjectTable;
