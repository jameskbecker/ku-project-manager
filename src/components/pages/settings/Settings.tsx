import React, { useEffect, useState } from 'react';
import Button from '../../global/Button';
import SelectInput from '../../global/input/SelectInput';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';
import NavBar from '../../layout/HeaderBar';
import Layout from '../../layout/Layout';
import SideBar from '../../layout/SideBar';
import Content from './Content';

const Settings = () => {
  const [editMode, setEditMode] = useState(false);
  const [first, setFirst] = useState('John');
  const [last, setLast] = useState('Doe');
  const [email, setEmail] = useState('johndoe@kupm.edu');
  const [password, setPassword] = useState('••••••••••••');

  useEffect(() => {
    document.title = 'Settings | KUPM';
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleFirstChange = () => {};
  const handleLastChange = () => {};
  const handleEmailChange = () => {};
  const handlePasswordChange = () => {};

  return (
    <Layout>
      <SideBar activePage="settings" />
      <NavBar pageName="Settings" />
      <Content>
        <Panel heading="Account" style={{ gridRow: 'span 2' }}>
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
          <TextInput
            label="Email"
            value={email}
            onChange={handleEmailChange}
            disabled={!editMode}
          />
          <TextInput
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            disabled={!editMode}
          />
          <Button text={editMode ? 'Save' : 'Edit'} onClick={toggleEditMode} />
        </Panel>

        <Panel heading="Enrolment">
          <SelectInput
            label="Course"
            options={[{ label: 'Computer Science', value: 'light' }]}
          />
          <SelectInput
            label="Modules"
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
            ]}
          />
        </Panel>
        <Panel heading="Appearance">
          <SelectInput
            label="Theme"
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
            ]}
          />
        </Panel>
      </Content>
    </Layout>
  );
};

export default Settings;
