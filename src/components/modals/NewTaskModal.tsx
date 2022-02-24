import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProjects,
  saveProject,
  selectProject,
} from '../../store/projects';
import {
  fetchProjectTasks,
  saveTask,
  selectTask,
  toggleNewTask,
} from '../../store/tasks';
import theme from '../../theme';
import Button, { ButtonWrapper } from '../global/Button';
import { FlexColumn } from '../global/Flex';
import SelectInput from '../global/input/SelectInput';
import TextArea from '../global/input/TextArea';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

const NewTaskModal = () => {
  const { data, selectedTask, pageName } = useSelector(
    (state: any) => state.tasks
  );
  const { data: projectData, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  console.log(data, selectedTask);
  const selectedData = data.find((d: any) => d.id === selectedTask);

  const [projectId, setProjectId] = useState(selectedProject);
  const [parentId, setParentId] = useState('');
  const [name, setName] = useState(selectedData?.name || '');
  const [description, setDescription] = useState(
    selectedData?.description || ''
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

  if (!selectedData) taskOptions.push({ label: pageName, value: '' });
  console.log(taskOptions);
  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>{selectedTask ? 'Edit' : 'New'} Task</h2>
        <Separator />
        <FlexColumn>
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

          {/* <Separator /> */}

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
        </FlexColumn>
        <Separator />

        <ButtonWrapper>
          <Button
            light
            text="Cancel"
            color={theme.textBody}
            onClick={handleCancel}
          ></Button>
          <Button
            round
            text={`Save${selectedTask ? ' Changes' : ''}`}
            onClick={handleSave}
          />
        </ButtonWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default NewTaskModal;