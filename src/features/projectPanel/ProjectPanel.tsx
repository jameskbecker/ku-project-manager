import Panel from '@kupm/common/Panel';
import ProjectList from '@kupm/features/projectPanel/ProjectList';
import ProjectPanelOptions from '@kupm/features/projectPanel/ProjectPanelOptions';
import React from 'react';
import styled from 'styled-components';

const StyledProjectPanel = styled(Panel)``;

const ProjectPanel = () => {
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
