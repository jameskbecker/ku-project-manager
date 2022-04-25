import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditDetails } from '../../../store/settings';
import Button from '../../global/Button';
import Panel from '../../global/Panel';
import DetailsForm from './DetailsForm';
import PasswordForm from './PasswordForm';

const AccountPanel = () => {
  const dispatch = useDispatch();
  const { editDetails } = useSelector((state: any) => state.settings);
  const [resetPassword, setResetPassword] = useState(false);

  const toggleEditMode = () => {
    dispatch(toggleEditDetails());
  };
  const toggleReset = () => {
    setResetPassword(!resetPassword);
  };

  return (
    <Panel heading="Account" style={{ gridRow: 'span 2' }}>
      <DetailsForm />
      <Button
        text={editDetails ? 'Save' : 'Update Details'}
        onClick={toggleEditMode}
      />
      {resetPassword && <PasswordForm />}

      <Button
        light={!resetPassword}
        text={resetPassword ? 'Save' : 'Reset Password'}
        onClick={toggleReset}
      />
    </Panel>
  );
};

export default AccountPanel;
