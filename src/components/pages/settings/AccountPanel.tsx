import Button from '@/components/global/Button';
import Panel from '@/components/global/Panel';
import DetailsForm from '@/components/pages/settings/DetailsForm';
import PasswordForm from '@/components/pages/settings/PasswordForm';
import { showAccountError, toggleEditDetails } from '@/store/settings';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

const AccountPanel = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const { editDetails, accountError } = useSelector(
    (state: any) => state.settings
  );
  const [resetPassword, setResetPassword] = useState(false);

  const toggleEditMode = () => {
    dispatch(toggleEditDetails());
  };

  const handleReset = () => {
    setResetPassword(!resetPassword);
    if (resetPassword) {
      dispatch(showAccountError('Passwords do not match.'));
    }
  };

  return (
    <Panel heading="Account" style={{ gridRow: 'span 2' }}>
      <div style={{ color: theme.error }}>{accountError}</div>
      <DetailsForm />
      <Button
        text={editDetails ? 'Save' : 'Update Details'}
        onClick={toggleEditMode}
      />
      {resetPassword && <PasswordForm />}

      <Button
        light={!resetPassword}
        text={resetPassword ? 'Save' : 'Reset Password'}
        onClick={handleReset}
      />
    </Panel>
  );
};

export default AccountPanel;
