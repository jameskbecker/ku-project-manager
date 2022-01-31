import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchAllProjects,
  saveProject,
  toggleNewProject,
} from '../../../store/projects';
import theme from '../../../theme';
import Button from '../../global/Button';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';

const Wrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  height: 100%;

  background: #000000c5;
  z-index: 100;

  & > * {
    flex: 0 1 auto;
  }

  h2 {
    font-weight: 600;
    color: ${theme.text};

    text-overflow: ellipsis;
    text-indent: 0;
    padding: 0.5rem 0;
    overflow: hidden;
    white-space: nowrap;

    user-select: none;
  }
`;

const NewProjectModal = () => {
  const { data, selectedProject } = useSelector((state: any) => state.projects);
  const selectedData = data.find((d: any) => d.id === selectedProject);
  console.log(data);
  const [name, setName] = useState(selectedData?.name || '');
  const [description, setDescription] = useState(
    selectedData?.description || ''
  );

  const [priority, setPriority] = useState(selectedData?.priority || '0');

  const dispatch = useDispatch();

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(toggleNewProject());
  };

  const handleSave = async () => {
    try {
      const payload: any = { name, description, priority };
      if (selectedProject) {
        payload.id = selectedProject;
      }
      dispatch(saveProject(payload));

      dispatch(fetchAllProjects());
      dispatch(toggleNewProject());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper onClick={handleCancel}>
      <Panel
        onClick={(e) => e.stopPropagation()}
        secondary
        style={{ flex: '0 1 auto', opacity: 1, width: '300px' }}
      >
        <h2>{selectedData ? 'Edit' : 'New'} Project</h2>
        <TextInput
          label="Name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <TextInput
          label="Description"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <TextInput
          label="Priority"
          type="number"
          value={priority}
          onChange={(e: any) => setPriority(e.target.value)}
        />
        <Button light text="Cancel" onClick={handleCancel}></Button>
        <Button round text="Save" onClick={handleSave} />
      </Panel>
    </Wrapper>
  );
};

export default NewProjectModal;
