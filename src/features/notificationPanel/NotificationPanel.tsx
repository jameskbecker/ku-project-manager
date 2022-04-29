import Panel from '@kupm/common/Panel';
import NotificationList from '@kupm/features/notificationPanel/NotificationList';
import NotificationPanelOptions from '@kupm/features/notificationPanel/NotificationPanelOptions';
import React from 'react';

const NotificationPanel = () => {
  return (
    <Panel heading="Recent Notifications" Options={NotificationPanelOptions}>
      <NotificationList />
    </Panel>
  );
};

export default NotificationPanel;
