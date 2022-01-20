import React from 'react';
import { Project } from '../../../types';
import Panel from '../../global/Panel';

type UpcomingPanelProps = {
  project: Project;
  selectProjectHandler: (id: string) => void;
};

const UpcomingPanel = ({
  project,
  selectProjectHandler,
}: UpcomingPanelProps) => (
  <Panel
    secondary
    heading={project.name}
    key={project.id}
    onClick={() => selectProjectHandler(project.id)}
  >
    <div>{new Date(project.createdAt * 1000).toLocaleString()}</div>
  </Panel>
);

export default UpcomingPanel;
