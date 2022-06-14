import { FlexColumn } from '@kupm/common/Flex';
import PasswordResetPanel from '@kupm/features/passwordResetPanel/PasswordResetPanel';
import React from 'react';

const Forgot = () => {
  return (
    <FlexColumn
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PasswordResetPanel />
    </FlexColumn>
  );
};

export default Forgot;
