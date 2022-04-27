import Button from '@kupm/common/Button';
import TextArea from '@kupm/common/input/TextArea';
import TextInput from '@kupm/common/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '@kupm/common/Modal';
import Separator from '@kupm/common/Separator';
import { toggleNewProject } from '@kupm/features/projects/projectsSlice';
import { getCookie } from '@kupm/utils/cookie';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
} from '../api/apiSlice';

const NewProjectModal = () => {
  const { data: projects } = useGetProjectsQuery(null);
  const { selectedProject } = useSelector((state: any) => state.projects);
  const selectedData = projects?.data.find(
    (d: any) => d.id === selectedProject
  );
  const [name, setName] = useState(selectedData?.name || '');
  const [dueAt, setDueAt] = useState(selectedData?.dueAt || '');
  const [priority, setPriority] = useState(selectedData?.priority || '0');
  const [description, setDescription] = useState(
    selectedData?.description || ''
  );

  const dispatch = useDispatch();

  const [addProject, { isLoading }] = useAddProjectMutation();
  const [updateProject, { isLoading: isLoadingUpdate }] =
    useUpdateProjectMutation();

  const handleNameChange = (e: any) => setName(e.target.value);
  const handlePriorityChange = (e: any) => setPriority(e.target.value);
  const handleDueAtChange = (e: any) => setDueAt(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);

  const handleCancel = () => dispatch(toggleNewProject());
  const handleSave = async () => {
    const userId = getCookie('kupm_user_id');
    if (!userId) {
      alert('no userid');
      return;
    }

    const args: any = {
      name,
      dueAt: Math.floor(new Date(dueAt).getTime() / 1000),
      priority,
      description,
      createdBy: userId,
    };

    try {
      if (selectedProject) {
        args.id = selectedProject;
        await updateProject(args);
      } else await addProject(args);

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
          <Button
            round
            text={isLoading || isLoadingUpdate ? 'Saving...' : 'Save'}
            onClick={handleSave}
          />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default NewProjectModal;
