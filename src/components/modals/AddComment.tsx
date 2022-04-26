import Button from '@kupm/components/common/Button';
import TextArea from '@kupm/components/common/input/TextArea';
import {
  ModalBackdrop,
  ModalContent,
  ModalFooter,
} from '@kupm/components/common/Modal';
import Separator from '@kupm/components/common/Separator';
import { toggleAddComment } from '@kupm/store/tasks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
          value={message}
          onChange={handleMessageChange}
          max={2000}
        />

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button round text="Add" onClick={handleSave} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default AddCommentModal;
