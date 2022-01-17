import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchAllProjects,
  saveProject,
  toggleNewProject,
} from '../../../store/projects';
import Button from '../../global/Button';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';

const Wrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: #000000c5;
  z-index: 10;

  & > * {
    flex: 0 1 auto;
  }
`;

const NewProjectModal = () => {
  const { data, selectedProject } = useSelector((state: any) => state.projects);
  const selectedData = data.find((d: any) => d.id === selectedProject);

  const [name, setName] = useState(selectedData?.name || '');
  const [description, setDescription] = useState(
    selectedData?.description || ''
  );

  const [priority, setPriority] = useState(selectedData?.priority || '0');

  const dispatch = useDispatch();

  const handleCancel = () => {
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
    <Wrapper>
      <Panel secondary style={{ flex: '0 1 auto', opacity: 1, width: '300px' }}>
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
