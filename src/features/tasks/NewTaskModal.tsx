import Button from '@kupm/common/Button';
import SelectInput from '@kupm/common/input/SelectInput';
import TextArea from '@kupm/common/input/TextArea';
import TextInput from '@kupm/common/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '@kupm/common/Modal';
import Separator from '@kupm/common/Separator';
import {
  useAddTaskMutation,
  useGetProjectsQuery,
  useGetProjectTasksQuery,
  useUpdateTaskMutation,
} from '@kupm/features/api/apiSlice';
import { selectTask, toggleNewTask } from '@kupm/features/tasks/tasksSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewTaskModal = () => {
  const { id, taskId } = useParams<any>();
  const { data: taskResponse, isLoading } = useGetProjectTasksQuery({ id });
  const { data: projectResponse } = useGetProjectsQuery(null);

  const { selectedTask } = useSelector((state: any) => state.tasks);
  const { selectedProject } = useSelector((state: any) => state.projects);
  const editTaskData = taskResponse.data.tasks.find(
    (d: any) => d.id === selectedTask
  );
  const parentTaskData = taskResponse.data.tasks.find(
    (d: any) => d.id === taskId
  );

  const [projectId, setProjectId] = useState(selectedProject);
  const [parentId, setParentId] = useState('');
  const [name, setName] = useState(editTaskData?.name || '');
  const [description, setDescription] = useState(
    editTaskData?.description || ''
  );
  const [priority, setPriority] = useState(editTaskData?.priority || '');

  const dispatch = useDispatch();
  const [addTask] = useAddTaskMutation();
  const [updateTask, { isLoading: isUpdating }] = useUpdateTaskMutation();

  const handleNameChange = (e: any) => setName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const handlePriorityChange = (e: any) => setPriority(e.target.value);

  const handleCancel = () => dispatch(toggleNewTask());
  const handleSave = async () => {
    const payload: any = { projectId, parentId, name, description, priority };
    try {
      if (selectedTask) {
        payload.id = selectedTask;
        await updateTask(payload);
      } else {
        await addTask(payload);
      }
      dispatch(toggleNewTask());
      dispatch(selectTask(''));
    } catch (e) {
      console.error(e);
    }
  };

  const projectOptions = [
    {
      label: taskResponse?.data.name || '',
      value: projectId,
    },
  ];

  const taskOptions = [
    { label: 'None', value: '/' },
    //...data.map((d: any) => ({ label: d.name, value: d.id })),
  ];

  if (parentTaskData)
    taskOptions.push({ label: parentTaskData.name, value: '' });

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
