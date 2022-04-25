import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeTheme, fetchAccountDetails } from '../../../store/settings';
import { getCookie } from '../../../utils/cookie';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import SelectInput from '../../global/input/SelectInput';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';

const AccountPanel = () => {
  const { theme, accountFirstName, accountLastName, accountEmail } =
    useSelector((state: any) => state.settings);
  const dispatch = useDispatch();
  const history = useHistory();

  const [editMode, setEditMode] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const [first, setFirst] = useState(accountFirstName);
  const [last, setLast] = useState(accountLastName);
  const [email, setEmail] = useState(accountEmail);
  const [password, setPassword] = useState('');

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
          value={first}
          onChange={handleFirstChange}
          disabled={!editMode}
        />
        <TextInput
          label="Last Name"
          value={last}
          onChange={handleLastChange}
          disabled={!editMode}
        />
      </FlexRow>

      <TextInput
        label="Email"
        value={email}
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
