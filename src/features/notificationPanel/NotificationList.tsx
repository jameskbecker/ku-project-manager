import DataPlaceholder from '@kupm/common/DataPlaceholder';
import ScrollContainer from '@kupm/common/ScrollContainer';
import { useGetNotificationsQuery } from '@kupm/features/api/userApiSlice';
import NotificationListItem from '@kupm/features/notificationPanel/NotificationListItem';
import React from 'react';

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
