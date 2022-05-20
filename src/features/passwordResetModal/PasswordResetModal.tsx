import Button from '@kupm/common/Button';
import TextInput from '@kupm/common/input/TextInput';
import ModalBackdrop from '@kupm/common/modal/ModalBackdrop';
import ModalContent from '@kupm/common/modal/ModalContent';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Separator from '@kupm/common/Separator';
import { hidePasswordResetModal } from '@kupm/features/passwordResetModal/passwordResetModalSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PasswordResetModal = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const dispatch = useDispatch();

  const handleOldPasswordChange = (e: any) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e: any) => setNewPassword(e.target.value);
  const handleConfirmationPasswordChange = (e: any) =>
    setConfirmationPassword(e.target.value);

  const handleCancel = () => dispatch(hidePasswordResetModal());
  const handleReset = async (e: any) => {};

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent secondary onClick={(e) => e.stopPropagation()}>
        <h2>Reset Password</h2>

        <Separator />

        <TextInput
          label="Old Password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <TextInput
          label="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <TextInput
          label="Confirm New Password"
          value={confirmationPassword}
          onChange={handleConfirmationPasswordChange}
        />

        <Separator />

        <ModalFooter>
          <Button light text="Cancel" onClick={handleCancel}></Button>
          <Button round text="Reset" onClick={handleReset} />
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default PasswordResetModal;
