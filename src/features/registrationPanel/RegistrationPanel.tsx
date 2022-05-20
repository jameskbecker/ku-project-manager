import Button from '@kupm/common/Button';
import TextInput from '@kupm/common/input/TextInput';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Panel from '@kupm/common/Panel';
import Separator from '@kupm/common/Separator';
import { useRegisterMutation } from '@kupm/features/api/authApiSlice';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationPanel = () => {
  const { goBack, ...history } = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [register] = useRegisterMutation();

  const handleRegister = async () => {
    await register({ firstName, lastName, email, password });
    history.push('/login');
  };

  return (
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
  );
};

export default RegistrationPanel;
