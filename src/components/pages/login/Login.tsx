import React from 'react';
import { useHistory } from 'react-router-dom';
import theme from '../../../theme';
import Button from '../../global/Button';
import { FlexColumn } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import Logo from '../../global/Logo';
import Panel from '../../global/Panel';
import Separator from '../../global/Separator';
import { LogoWrapper } from '../../layout/SideBar';
import LoginHeader from './LoginHeader';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/');
  };

  return (
    <FlexColumn
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Panel style={{ width: '600px', flex: '0 0 auto' }}>
        <LoginHeader>
          <Logo />
        </LoginHeader>
        <Separator />
        <label>Please enter your login details:</label>
        <TextInput label="Email" />
        <TextInput label="Password" />
        <Separator />
        <Button
          text="Register"
          color={theme.textBody}
          light
          onClick={handleLogin}
        />
        <Button text="Sign In" round onClick={handleLogin} />
      </Panel>
    </FlexColumn>
  );
};

export default Login;
