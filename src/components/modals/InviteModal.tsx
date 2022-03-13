import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleInvite } from '../../store/projects';
import theme from '../../theme';
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
  { label: '1 Week', value: 'week' },
  { label: '1 Month', value: 'month' },
];

const InviteModal = () => {
  const [recipient, setRecipient] = useState('');
  const dispatch = useDispatch();

  const handleRecipientChange = (e: any) => setRecipient(e.target.value);

  const handleCancel = () => dispatch(toggleInvite());
  const handleSave = () => {};

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Invite Member</h2>

        <Separator />

        <TextInput
          label="Recipient"
          placeholder="Recipient Email"
          value={recipient}
          onChange={handleRecipientChange}
        />

        <SelectInput
          label="Permissions"
          options={permissionOptions}
          value={permissionOptions[permissionOptions.length - 1]}
          onChange={() => {}}
        />

        <SelectInput
          label="Expires After"
          options={expiryOptions}
          value={expiryOptions[expiryOptions.length - 1]}
          onChange={() => {}}
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
