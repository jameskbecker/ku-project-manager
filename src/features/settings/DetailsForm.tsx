import { FlexRow } from '@kupm/common/Flex';
import TextInput from '@kupm/common/input/TextInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../api/apiSlice';

const DetailsForm = () => {
  const { editDetails } = useSelector((state: any) => state.settings);
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
