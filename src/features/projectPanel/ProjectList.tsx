import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import { useGetProjectsQuery } from '@kupm/features/api/apiSlice';
import ProjectListItem from '@kupm/features/projectPanel/ProjectListItem';
import React from 'react';

const ProjectList = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(null);

  if (isLoading) {
    return <DataPlaceholder>Loading...</DataPlaceholder>;
  }

  if (projects.data.length < 1) {
    return <DataPlaceholder>No Upcoming Projects</DataPlaceholder>;
  }
  return (
    <ScrollContainer>
      {projects?.data.map((p: any, i: number) => (
        <ProjectListItem key={i} project={p} />
      ))}
    </ScrollContainer>
  );
};

export default ProjectList;
