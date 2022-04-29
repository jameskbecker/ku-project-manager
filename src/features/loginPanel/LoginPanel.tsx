import Button from '@kupm/common/Button';
import { FlexRow } from '@kupm/common/Flex';
import TextInput from '@kupm/common/input/TextInput';
import Logo from '@kupm/common/Logo';
import { ModalFooter } from '@kupm/common/Modal';
import Panel from '@kupm/common/Panel';
import Separator from '@kupm/common/Separator';
import { useLoginMutation } from '@kupm/features/api/apiSlice';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LoginHeader = styled(FlexRow)`
  justify-content: center;

  padding: 1rem 0.75rem;
`;

const LoginPanel = () => {
  const history = useHistory();
  const [login] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage] = useState('');

  const handleRegister = () => {
    history.push('/register');
  };

  const handleLogin = async () => {
    await login({ email, password });
    history.push('/');
  };

  return (
    <Panel style={{ width: '600px', flex: '0 0 auto' }}>
      <LoginHeader>
        <Logo />
      </LoginHeader>
      <Separator />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <FlexRow>
        <label style={{ flexGrow: 1 }}>Please enter your login details:</label>
        <a href="/forgot" style={{ textDecoration: 'underline' }}>
          Forgot Password?
        </a>
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
  );
};

export default LoginPanel;
