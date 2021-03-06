import Button from '@kupm/common/button';
import ModalBackdrop from '@kupm/common/modal/ModalBackdrop';
import ModalContent from '@kupm/common/modal/ModalContent';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Separator from '@kupm/common/Separator';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { hideDeleteProjectsModal } from './deleteProjectsModalSlice';

const DeleteProjectsModal = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const handleCancel = () => dispatch(hideDeleteProjectsModal());

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

export default DeleteProjectsModal;
