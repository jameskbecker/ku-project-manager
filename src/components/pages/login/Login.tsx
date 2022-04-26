import Button from '@kupm/components/global/Button';
import { FlexColumn, FlexRow } from '@kupm/components/global/Flex';
import TextInput from '@kupm/components/global/input/TextInput';
import Logo from '@kupm/components/global/Logo';
import { ModalFooter } from '@kupm/components/global/Modal';
import Panel from '@kupm/components/global/Panel';
import Separator from '@kupm/components/global/Separator';
import LoginHeader from '@kupm/components/pages/login/LoginHeader';
import { postLogin } from '@kupm/store/auth';
import { fetchAccountDetails } from '@kupm/store/settings';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state: any) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    history.push('/register');
  };

  const handleLogin = () => {
    dispatch(postLogin({ email, password }));
    dispatch(fetchAccountDetails());
    //history.push('/');
  };

  const handleMockLogin = (id: string) => {
    // does not expire
    const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT';
    document.cookie = `kupm_user_id=${id}; expires=${expiryDate};`;
    dispatch(fetchAccountDetails());
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
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <FlexRow>
          <label style={{ flexGrow: 1 }}>
            Please enter your login details:
          </label>
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
    </FlexColumn>
  );
};

export default Login;
