import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import { useLoginMutation } from '@kupm/features/api/apiSlice';
import LoginPanel from '@kupm/features/loginPanel/LoginPanel';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
