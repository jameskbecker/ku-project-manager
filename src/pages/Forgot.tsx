import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@kupm/common/Button';
import { FlexColumn } from '@kupm/common/Flex';
import TextInput from '@kupm/common/input/TextInput';
import { ModalFooter } from '@kupm/common/Modal';
import Panel from '@kupm/common/Panel';
import Separator from '@kupm/common/Separator';

const Forgot = () => {
  const history = useHistory();

  const handleReset = () => {
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
    </FlexColumn>
  );
};

export default Forgot;
