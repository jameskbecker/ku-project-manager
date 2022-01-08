import {
  faPencilAlt,
  faSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Panel from '../../global/Panel';

const ProjectTableRow = ({ project, loadProjectData }: any) => {
  const history = useHistory();

  const handleSelect = () => {
    history.push(`/projects/${project.id}`);
  };

  const handleEdit = () => {};

  const handleDelete = async (e: any) => {
    e.stopPropagation();

    try {
      const resp = await window.fetch(
        `/local/api/projects/${project.id}`,
        // 'https://kupm-api.herokuapp.com/api/projects'
        { method: 'DELETE' }
      );
      const body = await resp.json();
      loadProjectData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Panel
      key={project.id}
      onClick={handleSelect}
      style={{
        flexDirection: 'row',
      }}
    >
      <div>
        <FontAwesomeIcon icon={faSquare} />
      </div>
      <div>{project.name}</div>
      <div>{project.description}</div>
      <div>{project.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <div>{new Date(project.timeCreated * 1000).toLocaleString()}</div>
      <div>
        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </Panel>
  );
};
export default ProjectTableRow;
