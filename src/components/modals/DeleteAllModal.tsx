import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDeleteAll } from '../../store/projects';
import theme from '../../theme';
import Button from '../global/Button';
import { ModalBackdrop, ModalContent } from '../global/Modal';
import Separator from '../global/Separator';

const DeleteAllModal = () => {
  const dispatch = useDispatch();

  const handleCancel = () => dispatch(toggleDeleteAll());

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Are you sure you want to delete all Projects?</h2>

        <h5>This action cannot be undone.</h5>
        <Separator />
        <Button light text="Cancel" onClick={handleCancel}></Button>
        <Button text="Delete All" color={theme.error} onClick={null} />
      </ModalContent>
    </ModalBackdrop>
  );
};

export default DeleteAllModal;
