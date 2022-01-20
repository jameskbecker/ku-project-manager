import React from 'react';
import { Project } from '../../../types';
import Panel from '../../global/Panel';

type ProjectPanelProps = {
  project: Project;
};

const ProjectPanel = ({ project }: ProjectPanelProps) => (
  <Panel heading={project.name}>
    <div>{project.description}</div>
    <div>Status: {project.isComplete ? 'Complete!' : 'Incomplete'}</div>
    <div>Created: {new Date(project.createdAt * 1000).toLocaleString()}</div>
  </Panel>
);

export default ProjectPanel;
