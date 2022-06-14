import { FlexColumn } from '@kupm/common/Flex';
import LoginPanel from '@kupm/features/loginPanel/LoginPanel';
import React from 'react';

const Login = () => {
  return (
    <FlexColumn
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginPanel />
    </FlexColumn>
  );
};

export default Login;
