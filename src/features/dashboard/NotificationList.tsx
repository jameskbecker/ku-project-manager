import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import NotificationListItem from '@kupm/features/dashboard/NotificationListItem';
import React from 'react';
import { useGetNotificationsQuery } from '@kupm/features/api/apiSlice';

const NotificationList = () => {
  const { data: notifications, isLoading } = useGetNotificationsQuery(null);

  if (isLoading) {
    return <DataPlaceholder>Loading...</DataPlaceholder>;
  }

  if (notifications.data.length < 1) {
    return <DataPlaceholder>No Recent Notifications</DataPlaceholder>;
  }

  return (
    <ScrollContainer>
      {notifications.data.map((n: any, i: number) => (
        <NotificationListItem key={i} data={n} />
      ))}
    </ScrollContainer>
  );
};

export default NotificationList;
