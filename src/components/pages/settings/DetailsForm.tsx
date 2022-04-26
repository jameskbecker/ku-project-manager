import { FlexRow } from '@/components/global/Flex';
import TextInput from '@/components/global/input/TextInput';
import { fetchAccountDetails } from '@/store/settings';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DetailsForm = () => {
  const dispatch = useDispatch();
  const { accountFirstName, accountLastName, accountEmail, editDetails } =
    useSelector((state: any) => state.settings);

  useEffect(() => {
    dispatch(fetchAccountDetails());
  }, []);

  const handleFirstChange = () => {};
  const handleLastChange = () => {};
  const handleEmailChange = () => {};

  return (
    <>
      <FlexRow>
        <TextInput
          label="First Name"
          value={accountFirstName}
          onChange={handleFirstChange}
          disabled={!editDetails}
        />
        <TextInput
          label="Last Name"
          value={accountLastName}
          onChange={handleLastChange}
          disabled={!editDetails}
        />
      </FlexRow>

      <TextInput
        label="Email"
        value={accountEmail}
        onChange={handleEmailChange}
        disabled={!editDetails}
      />
    </>
  );
};

export default DetailsForm;
