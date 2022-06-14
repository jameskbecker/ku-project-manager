import Button from '@kupm/common/button';
import SelectInput from '@kupm/common/input/SelectInput';
import TextInput from '@kupm/common/input/TextInput';
import ModalBackdrop from '@kupm/common/modal/ModalBackdrop';
import ModalContent from '@kupm/common/modal/ModalContent';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Separator from '@kupm/common/Separator';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { useSendInviteMutation } from '../api/apiSlice';
import { hideInviteModal } from './inviteModalSlice';

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
  const [sendInvite] = useSendInviteMutation();

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

  const handleCancel = () => dispatch(hideInviteModal());
  const handleSave = async (e: any) => {
    await sendInvite({
      projectId: selectedProject,
      email,
      permissions: permissionOption.value,
      expires: expiryOption.value,
    });
    dispatch(hideInviteModal());
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
