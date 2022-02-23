import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInvite } from '../../store/projects';
import theme from '../../theme';
import Button from '../global/Button';
import { FlexColumn } from '../global/Flex';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

const InviteModal = () => {
  const { data, selectedTask, pageName } = useSelector(
    (state: any) => state.tasks
  );
  const { data: projectData, selectedProject } = useSelector(
    (state: any) => state.projects
  );

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

  const handleCancel = () => dispatch(toggleInvite());
  const handleSave = () => {};

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

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent
        secondary
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: '500px' }}
      >
        <h2>Invite Member</h2>
        <Separator />
        <FlexColumn>
          <TextInput
            label="Recipient"
            placeholder="Email or name"
            value={name}
            onChange={handleNameChange}
          />
        </FlexColumn>
        <Separator />
        <ModalFooter>
          <Button
            light
            text="Cancel"
            color={theme.textBody}
            onClick={handleCancel}
          ></Button>
          <Button round text="Send Invite" onClick={handleSave} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InviteModal;
