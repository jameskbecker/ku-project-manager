import { FlexRow } from '@kupm/common/Flex';
import TextInput from '@kupm/common/input/TextInput';
import { useGetUserQuery } from '@kupm/features/api/userApiSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailsForm = () => {
  const { editDetails } = useSelector((state: any) => state.accountPanel);
  const { data: userResponse, isLoading } = useGetUserQuery(null);

  const handleFirstChange = () => {};
  const handleLastChange = () => {};
  const handleEmailChange = () => {};

  return (
    <>
      <FlexRow>
        <TextInput
          label="First Name"
          value={isLoading ? '' : userResponse.data.firstName}
          onChange={handleFirstChange}
          disabled={!editDetails}
        />
        <TextInput
          label="Last Name"
          value={isLoading ? '' : userResponse.data.lastName}
          onChange={handleLastChange}
          disabled={!editDetails}
        />
      </FlexRow>

      <TextInput
        label="Email"
        value={isLoading ? '' : userResponse.data.email}
        onChange={handleEmailChange}
        disabled={!editDetails}
      />
    </>
  );
};

export default DetailsForm;
