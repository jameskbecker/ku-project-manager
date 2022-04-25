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
import AccountPanel from './AccountPanel';
import AppearancePanel from './AppearancePanel';
import Content from './Content';
import EnrolmentPanel from './EnrolmentPanel';

const Settings = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!getCookie('kupm_user_id')) {
      history.push('/login');
      return;
    }
    dispatch(fetchAccountDetails());
    document.title = 'Settings | KUPM';
  }, []);

  return (
    <Layout>
      <SideBar activePage="settings" />
      <NavBar pageName="Settings" />
      <Content>
        <AccountPanel />
        <EnrolmentPanel />
        <AppearancePanel />
      </Content>
    </Layout>
  );
};

export default Settings;
