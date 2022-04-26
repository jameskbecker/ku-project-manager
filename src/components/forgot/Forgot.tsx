import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@kupm/components/common/Button';
import { FlexColumn } from '@kupm/components/common/Flex';
import TextInput from '@kupm/components/common/input/TextInput';
import { ModalFooter } from '@kupm/components/common/Modal';
import Panel from '@kupm/components/common/Panel';
import Separator from '@kupm/components/common/Separator';

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
