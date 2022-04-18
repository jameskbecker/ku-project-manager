import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProjects,
  saveProject,
  toggleNewProject,
} from '../../store/projects';
import { getCookie } from '../../utils/cookie';
import Button from '../global/Button';
import TextArea from '../global/input/TextArea';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

const NewProjectModal = () => {
  const { data, selectedProject } = useSelector((state: any) => state.projects);
  const selectedData = data.find((d: any) => d.id === selectedProject);
  const [name, setName] = useState(selectedData?.name || '');
  const [dueAt, setDueAt] = useState(selectedData?.dueAt || '');
  const [priority, setPriority] = useState(selectedData?.priority || '0');
  const [description, setDescription] = useState(
    selectedData?.description || ''
  );

  const dispatch = useDispatch();

  const handleNameChange = (e: any) => setName(e.target.value);
  const handlePriorityChange = (e: any) => setPriority(e.target.value);
  const handleDueAtChange = (e: any) => setDueAt(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);

  const handleCancel = () => dispatch(toggleNewProject());
  const handleSave = () => {
    const payload: any = {
      name,
      dueAt: Math.floor(new Date(dueAt).getTime() / 1000),
      priority,
      description,
      createdBy: getCookie('kupm_user_id'),
    };
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
        <TextInput
          type="datetime-local"
          label="Due At"
          value={dueAt}
          onChange={handleDueAtChange}
        />
        <TextInput
          label="Priority"
          type="number"
          value={priority}
          onChange={handlePriorityChange}
        />
        <TextArea
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          max={1000}
        />

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button round text="Save" onClick={handleSave} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default NewProjectModal;
