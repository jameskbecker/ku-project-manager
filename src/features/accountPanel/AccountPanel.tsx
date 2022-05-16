import Button from '@kupm/common/Button';
import Panel from '@kupm/common/Panel';
import { toggleEditDetails } from '@kupm/features/accountPanel/accountPanelSlice';
import DetailsForm from '@kupm/features/accountPanel/DetailsForm';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { showPasswordResetModal } from '../passwordResetModal/passwordResetModalSlice';

const AccountPanel = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const { editDetails, accountError } = useSelector(
    (state: any) => state.accountPanel
  );

  const toggleEditMode = () => {
    dispatch(toggleEditDetails());
  };

  const handleReset = () => {
    dispatch(showPasswordResetModal());
  };

  return (
    <Panel heading="Account" style={{ gridRow: 'span 2' }}>
      <div style={{ color: theme.error }}>{accountError}</div>
      <DetailsForm />
      <Button
        text={editDetails ? 'Save' : 'Update Details'}
        onClick={toggleEditMode}
      />

      <Button light text="Reset Password" onClick={handleReset} />
    </Panel>
  );
};

export default AccountPanel;
