import { FlexColumn } from '@kupm/common/Flex';
import RegistrationPanel from '@kupm/features/registrationPanel/RegistrationPanel';
import React from 'react';

const Register = () => {
  return (
    <FlexColumn
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RegistrationPanel />
    </FlexColumn>
  );
};

export default Register;
