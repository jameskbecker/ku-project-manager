import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleInvite } from '../../store/projects';
import { toggleAddComment } from '../../store/tasks';
import theme from '../../theme';
import Button from '../global/Button';
import TextArea from '../global/input/TextArea';
import TextInput from '../global/input/TextInput';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Separator from '../global/Separator';

const AddCommentModal = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleMessageChange = (e: any) => setMessage(e.target.value);

  const handleCancel = () => dispatch(toggleAddComment());
  const handleSave = () => {};

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Add Comment</h2>

        <Separator />

        <TextArea
          label="Message"
          placeholder="Max 500 Characters"
          value={message}
          onChange={handleMessageChange}
        />

        <Separator />

        <ModalFooter>
          <Button
            light
            text="Cancel"
            color={theme.textBody}
            onClick={handleCancel}
          ></Button>
          <Button round text="Add" onClick={handleSave} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default AddCommentModal;
