import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../../../store/auth';
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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    history.push('/register');
  };

  const handleLogin = () => {
    dispatch(postLogin({ email, password }));
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

        <TextInput
          label="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
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
