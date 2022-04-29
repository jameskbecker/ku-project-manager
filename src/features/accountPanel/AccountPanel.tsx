import Button from '@kupm/common/Button';
import Panel from '@kupm/common/Panel';
import {
  showAccountError,
  toggleEditDetails,
} from '@kupm/features/accountPanel/accountPanelSlice';
import DetailsForm from '@kupm/features/accountPanel/DetailsForm';
import PasswordForm from '@kupm/features/accountPanel/PasswordForm';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

const AccountPanel = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const { editDetails, accountError } = useSelector(
    (state: any) => state.accountPanel
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
