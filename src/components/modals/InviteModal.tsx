import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { sendInvite, toggleInvite } from '../../store/projects';
import Button from '../global/Button';
import SelectInput from '../global/input/SelectInput';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

const permissionOptions = [
  { label: 'Read', value: 'read' },
  { label: 'Read and Write', value: 'read-write' },
];

const expiryOptions = [
  { label: '1 Day', value: 'day' },
  { label: '7 Days', value: 'week' },
  { label: '30 Days', value: 'month' },
];

const InviteModal = () => {
  const { selectedProject } = useSelector((state: any) => state.projects);
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [permissionOption, setPermissionOption] = useState(
    permissionOptions[0]
  );
  const [expiryOption, setExpiryOption] = useState(expiryOptions[0]);
  const dispatch = useDispatch();

  const handleEmailChange = (e: any) => setEmail(e.target.value);

  const handlePermissionChange = ({ name, value }: any) => {
    setPermissionOption(value);
  };

  const handleExpiryChange = ({ name, value }: any) => {
    setExpiryOption(value);
  };

  const handleCancel = () => dispatch(toggleInvite());
  const handleSave = (e: any) => {
    e.target.style.background = theme.success;
    dispatch(
      sendInvite({
        projectId: selectedProject,
        email,
        permissions: permissionOption.value,
        expires: expiryOption.value,
      })
    );
    dispatch(toggleInvite());
  };

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Invite Member</h2>

        <Separator />

        <TextInput
          label="Recipient"
          placeholder="Recipient Email"
          value={email}
          onChange={handleEmailChange}
        />

        <SelectInput
          label="Permissions"
          options={permissionOptions}
          value={permissionOption}
          name="permissions"
          onChange={handlePermissionChange}
        />

        <SelectInput
          label="Expires After"
          options={expiryOptions}
          value={expiryOption}
          name="expiry"
          onChange={handleExpiryChange}
        />

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button round text="Send Invite" onClick={handleSave} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InviteModal;
