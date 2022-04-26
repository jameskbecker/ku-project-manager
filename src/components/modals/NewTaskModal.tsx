import Button from '@kupm/components/global/Button';
import SelectInput from '@kupm/components/global/input/SelectInput';
import TextArea from '@kupm/components/global/input/TextArea';
import TextInput from '@kupm/components/global/input/TextInput';
import {
  ModalBackdrop,
  ModalContent,
  ModalFooter,
} from '@kupm/components/global/Modal';
import Separator from '@kupm/components/global/Separator';
import {
  fetchProjectTasks,
  saveTask,
  selectTask,
  toggleNewTask,
} from '@kupm/store/tasks';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NewTaskModal = () => {
  const { data, selectedTask, pageName } = useSelector(
    (state: any) => state.tasks
  );
  const { data: projectData, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  console.log(data, selectedTask);
  const selectedTaskData = data.find((d: any) => d.id === selectedTask);

  const [projectId, setProjectId] = useState(selectedProject);
  const [parentId, setParentId] = useState('');
  const [name, setName] = useState(selectedTaskData?.name || '');
  const [description, setDescription] = useState(
    selectedTaskData?.description || ''
  );
  const [priority, setPriority] = useState('0');

  const dispatch = useDispatch();

  const handleNameChange = (e: any) => setName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const handlePriorityChange = (e: any) => setPriority(e.target.value);

  const handleCancel = () => dispatch(toggleNewTask());
  const handleSave = () => {
    const payload: any = { projectId, parentId, name, description, priority };
    if (selectedTask) payload.id = selectedTask;
    try {
      dispatch(saveTask(payload));
      dispatch(fetchProjectTasks({ projectId }));
      dispatch(toggleNewTask());
      dispatch(selectTask(''));
    } catch (e) {
      console.error(e);
    }
  };

  const projectOptions = [
    {
      label: projectData.find((p: any) => p.id === projectId).name,
      value: projectId,
    },
  ];

  const taskOptions = [
    { label: 'None', value: '/' },
    //...data.map((d: any) => ({ label: d.name, value: d.id })),
  ];

  if (!selectedTaskData) taskOptions.push({ label: pageName, value: '' });
  console.log(taskOptions);
  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>{selectedTask ? 'Edit' : 'New'} Task</h2>
        <Separator />

        <SelectInput
          label="Project"
          options={projectOptions}
          value={projectOptions[0]}
          onChange={null}
          disabled
        />
        <SelectInput
          label="Parent Task"
          options={taskOptions}
          value={taskOptions[taskOptions.length - 1]}
          onChange={() => {}}
          disabled
        />

        <TextInput label="Name" value={name} onChange={handleNameChange} />
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
          max={500}
        />

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button
            round
            text={`Save${selectedTask ? ' Changes' : ''}`}
            onClick={handleSave}
          />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default NewTaskModal;
