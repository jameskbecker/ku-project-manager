import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProjects,
  saveProject,
  toggleNewProject,
} from '../../store/projects';
import theme from '../../theme';
import Button, { ButtonWrapper } from '../global/Button';
import TextArea from '../global/input/TextArea';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent } from '../global/Modal';
import Separator from '../global/Separator';

const NewProjectModal = () => {
  const { data, selectedProject } = useSelector((state: any) => state.projects);
  const selectedData = data.find((d: any) => d.id === selectedProject);
  const [name, setName] = useState(selectedData?.name || '');
  const [description, setDescription] = useState(
    selectedData?.description || ''
  );
  const [priority, setPriority] = useState(selectedData?.priority || '0');

  const dispatch = useDispatch();

  const handleNameChange = (e: any) => setName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const handlePriorityChange = (e: any) => setPriority(e.target.value);

  const handleCancel = () => dispatch(toggleNewProject());
  const handleSave = () => {
    const payload: any = { name, description, priority };
    if (selectedProject) payload.id = selectedProject;

    try {
      dispatch(saveProject(payload));
      dispatch(fetchAllProjects());
      dispatch(toggleNewProject());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>{selectedData ? 'Edit' : 'New'} Project</h2>

        <Separator />

        <TextInput label="Name" value={name} onChange={handleNameChange} />
        <TextArea
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextInput
          label="Priority"
          type="number"
          value={priority}
          onChange={handlePriorityChange}
        />

        <Separator />
        <ButtonWrapper>
          <Button
            light
            text="Cancel"
            color={theme.textBody}
            onClick={handleCancel}
          ></Button>
          <Button round text="Save" onClick={handleSave} />
        </ButtonWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default NewProjectModal;
