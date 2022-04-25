import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postRegister } from '../../../store/auth';
import Button from '../../global/Button';
import { FlexColumn } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import { ModalFooter } from '../../global/Modal';
import Panel from '../../global/Panel';
import Separator from '../../global/Separator';

const Register = () => {
  const { goBack } = useHistory();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = () => {
    dispatch(postRegister({ firstName, lastName, email, password }));
  };

  return (
    <FlexColumn
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Panel
        heading="Create an Account"
        style={{ width: '600px', flex: '0 0 auto' }}
      >
        <TextInput
          label="First Name"
          placeholder="John"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <TextInput
          label="Email"
          placeholder="johndoe@kupm.org"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          label="Confirm Password"
          value={passwordConfirm}
          onChange={(e: any) => setPasswordConfirm(e.target.value)}
        />
        <Separator />
        <ModalFooter>
          <Button text="Back" light onClick={goBack} />
          <Button text="Register" round onClick={handleRegister} />
        </ModalFooter>
      </Panel>
    </FlexColumn>
  );
};

export default Register;
