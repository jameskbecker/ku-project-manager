import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../../../store/auth';
import { fetchAccountDetails } from '../../../store/settings';
import Button from '../../global/Button';
import { FlexColumn, FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import Logo from '../../global/Logo';
import { ModalFooter } from '../../global/Modal';
import Panel from '../../global/Panel';
import Separator from '../../global/Separator';
import LoginHeader from './LoginHeader';

const userIds = {
  joseph: '39aeec9a-b8bb-11ec-a034-02e4fd6e79c6',
  eddie: '4727bca9-b8bb-11ec-a034-02e4fd6e79c6',
  alan: '63a74276-b8bb-11ec-a034-02e4fd6e79c6',
};

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
      <FlexRow style={{ position: 'absolute', right: 12, bottom: 12 }}>
        <Button
          light
          text="Login as Joseph"
          onClick={() => handleMockLogin(userIds.joseph)}
        />
        <Button
          light
          text="Login as Eddie"
          onClick={() => handleMockLogin(userIds.eddie)}
        />
        <Button
          light
          text="Login as Alan"
          onClick={() => handleMockLogin(userIds.alan)}
        />
      </FlexRow>
    </FlexColumn>
  );
};

export default Login;
