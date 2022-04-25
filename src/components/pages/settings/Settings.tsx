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

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

const Settings = () => {
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

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    dispatch(fetchAccountDetails());
    document.title = 'Settings | KUPM';
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

  const handleThemeSelect = ({ value: { value } }: any) => {
    dispatch(changeTheme({ theme: value }));

    // does not expire
    const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT';
    document.cookie = `kupm_theme=${value}; expires=${expiryDate};`;
  };

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
    <Layout>
      <SideBar activePage="settings" />
      <NavBar pageName="Settings" />
      <Content>
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

        <Panel heading="Enrolment">
          <SelectInput
            label="Course"
            options={[{ label: 'Computer Science', value: 'light' }]}
          />
          <SelectInput
            label="Modules"
            isMulti={true}
            options={[
              { label: 'Final Year Project', value: 'fyp' },
              { label: 'Software Development Practice ', value: 'sdp' },
            ]}
          />
        </Panel>
        <Panel heading="Appearance">
          <SelectInput
            label="Theme"
            options={themeOptions}
            value={themeOptions.find((o) => o.value === theme)}
            onChange={handleThemeSelect}
          />
        </Panel>
      </Content>
    </Layout>
  );
};

export default Settings;
