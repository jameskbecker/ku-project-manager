import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import Panel from '@kupm/common/Panel';
import { useGetProjectsQuery } from '@kupm/features/api/apiSlice';
import ProjectList from '@kupm/features/dashboard/ProjectList';
import React from 'react';
import styled from 'styled-components';

const StyledProjectPanel = styled(Panel)``;

const ProjectPanel = () => {
  const { refetch } = useGetProjectsQuery(null);

  const ProjectPanelOptions = () => {
    return (
      <SecondaryButton
        secondary
        round
        light
        icon={faSyncAlt}
        onClick={refetch}
      />
    );
  };

  return (
    <StyledProjectPanel
      heading="Upcoming Projects"
      Options={ProjectPanelOptions}
    >
      <ProjectList />
    </StyledProjectPanel>
  );
};

export default ProjectPanel;
