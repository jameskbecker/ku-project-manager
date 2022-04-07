import { format } from 'date-fns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Project } from '../../../types';
import Panel from '../../global/Panel';

type UpcomingPanelProps = {
  project: Project;
};

const StyledUpcomingPanel = styled(Panel)`
  flex: 0 0 auto;
  gap: 0.5rem;

  p {
    white-space: nowrap;
  }
`;

const UpcomingPanel = ({ project }: UpcomingPanelProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/projects/${project.id}`);
  };

  return (
    <StyledUpcomingPanel key={project.id} secondary onClick={handleClick}>
      <h4>{project.name}</h4>
      <h5>
        {format(new Date(project.createdAt), "'Due' do LLL y 'at' hh:mm aa")}
      </h5>
    </StyledUpcomingPanel>
  );
};

export default UpcomingPanel;
