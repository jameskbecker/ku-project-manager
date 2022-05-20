import Button from '@kupm/common/Button';
import TextInput from '@kupm/common/input/TextInput';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Panel from '@kupm/common/Panel';
import Separator from '@kupm/common/Separator';
import React from 'react';
import { useHistory } from 'react-router-dom';

const PasswordResetPanel = () => {
  const history = useHistory();

  const handleReset = () => {
    history.push('/');
  };

  const handleBack = () => {
    history.push('/login');
  };

  return (
    <Panel
      heading="Reset Password"
      style={{ width: '600px', flex: '0 0 auto' }}
    >
      <TextInput label="Email" placeholder="johndoe@kupm.org" />
      <Separator />
      <ModalFooter>
        <Button text="Back" light onClick={handleBack} />
        <Button text="Reset" round onClick={handleReset} />
      </ModalFooter>
    </Panel>
  );
};

export default PasswordResetPanel;
