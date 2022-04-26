import Button from '@kupm/common/Button';
import { ModalBackdrop, ModalContent, ModalFooter } from '@kupm/common/Modal';
import Separator from '@kupm/common/Separator';
import { toggleDeleteAll } from '@kupm/features/projects/projectsSlice';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

const DeleteAllModal = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const handleCancel = () => dispatch(toggleDeleteAll());

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Are you sure you want to delete all Projects?</h2>
        <h5>This action cannot be undone.</h5>

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button text="Delete All" color={theme.error} onClick={null} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default DeleteAllModal;