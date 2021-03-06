import Button from '@kupm/common/button';
import TextArea from '@kupm/common/input/TextArea';
import ModalBackdrop from '@kupm/common/modal/ModalBackdrop';
import ModalContent from '@kupm/common/modal/ModalContent';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Separator from '@kupm/common/Separator';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideAddCommentModal } from './addCommentSlice';

const AddCommentModal = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleMessageChange = (e: any) => setMessage(e.target.value);

  const handleCancel = () => dispatch(hideAddCommentModal());
  const handleSave = () => {
    dispatch(hideAddCommentModal());
  };

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
