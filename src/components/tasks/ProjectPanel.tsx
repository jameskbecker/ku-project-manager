import React from 'react';
import { Project } from '@kupm/types';
import Panel from '@kupm/components/common/Panel';

type ProjectPanelProps = {
  project: Project;
};

const ProjectPanel = ({ project }: ProjectPanelProps) => (
  <Panel heading={project.name}>
    <div>{project.description}</div>
    <div>Status: {project.isComplete ? 'Complete!' : 'Incomplete'}</div>
    <div>Created: {new Date(project.createdAt).toLocaleString()}</div>
  </Panel>
);

export default ProjectPanel;
