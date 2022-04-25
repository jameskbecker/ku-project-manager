import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountDetails } from '../../../store/settings';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';
import PasswordForm from './PasswordForm';

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
