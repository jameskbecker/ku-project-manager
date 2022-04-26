import React, { useState } from 'react';
import TextInput from '@kupm/components/common/input/TextInput';

const PasswordForm = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = () => {};
  return (
    <>
      <TextInput
        label="Old Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextInput
        label="New Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextInput
        label="Confirm New Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </>
  );
};

export default PasswordForm;
