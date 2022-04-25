import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountDetails } from '../../../store/settings';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';

const AccountPanel = () => {
  const dispatch = useDispatch();
  const { accountFirstName, accountLastName, accountEmail } = useSelector(
    (state: any) => state.settings
  );

  const [editMode, setEditMode] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(fetchAccountDetails());
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const toggleReset = () => {
    setResetPassword(!resetPassword);
  };

  const handleFirstChange = () => {};
  const handleLastChange = () => {};
  const handleEmailChange = () => {};
  const handlePasswordChange = () => {};

  const DetailsForm = () => (
    <>
      <FlexRow>
        <TextInput
          label="First Name"
          value={accountFirstName}
          onChange={handleFirstChange}
          disabled={!editMode}
        />
        <TextInput
          label="Last Name"
          value={accountLastName}
          onChange={handleLastChange}
          disabled={!editMode}
        />
      </FlexRow>

      <TextInput
        label="Email"
        value={accountEmail}
        onChange={handleEmailChange}
        disabled={!editMode}
      />
    </>
  );

  const PasswordForm = () => (
    <>
      <TextInput
        label="Old Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextInput
        label="New Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextInput
        label="Confirm New Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </>
  );

  return (
    <Panel heading="Account" style={{ gridRow: 'span 2' }}>
      <DetailsForm />
      <Button
        light={!editMode}
        text={editMode ? 'Save' : 'Update Details'}
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
