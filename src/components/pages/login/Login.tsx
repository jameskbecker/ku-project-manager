import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../global/Button';
import { FlexColumn, FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import Logo from '../../global/Logo';
import { ModalFooter } from '../../global/Modal';
import Panel from '../../global/Panel';
import Separator from '../../global/Separator';
import LoginHeader from './LoginHeader';

const Login = () => {
  const history = useHistory();

  const handleRegister = () => {
    history.push('/register');
  };

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
        <FlexRow>
          <label style={{ flexGrow: 1 }}>
            Please enter your login details:
          </label>
          <a href="/forgot">Forgot Password?</a>
        </FlexRow>

        <TextInput label="Email" />
        <TextInput type="password" label="Password" />
        <Separator />
        <ModalFooter>
          <Button text="Create an Account" light onClick={handleRegister} />
          <Button text="Sign In" round onClick={handleLogin} />
        </ModalFooter>
      </Panel>
    </FlexColumn>
  );
};

export default Login;
