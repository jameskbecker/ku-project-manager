import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import { useGetNotificationsQuery } from '@kupm/features/api/userApiSlice';
import React from 'react';

const NotificationPanelOptions = () => {
  const { refetch } = useGetNotificationsQuery(null);
  return (
    <SecondaryButton secondary round light icon={faSyncAlt} onClick={refetch} />
  );
};

export default NotificationPanelOptions;
