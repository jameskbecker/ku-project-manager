import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleInvite } from '../../store/projects';
import theme from '../../theme';
import Button from '../global/Button';
import { FlexColumn } from '../global/Flex';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

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
