import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/button';
import { useGetNotificationsQuery } from '@kupm/features/api/userApiSlice';
import React from 'react';

const NotificationPanelOptions = () => {
  const { refetch } = useGetNotificationsQuery(null);
  return <SecondaryButton secondary icon={faSyncAlt} onClick={refetch} />;
};

export default NotificationPanelOptions;
