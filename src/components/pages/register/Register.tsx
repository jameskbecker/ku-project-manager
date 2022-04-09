import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../global/Button';
import { FlexColumn } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import { ModalFooter } from '../../global/Modal';
import Panel from '../../global/Panel';
import Separator from '../../global/Separator';

const Register = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/');
  };

  const handleBack = () => {
    history.push('/login');
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
        <TextInput label="First Name" placeholder="John" />
        <TextInput label="Last Name" placeholder="Doe" />
        <TextInput label="Email" placeholder="johndoe@kupm.org" />
        <TextInput type="password" label="Password" />
        <TextInput type="password" label="Confirm Password" />
        <Separator />
        <ModalFooter>
          <Button text="Back" light onClick={handleBack} />
          <Button text="Sign In" round onClick={handleLogin} />
        </ModalFooter>
      </Panel>
    </FlexColumn>
  );
};

export default Register;
