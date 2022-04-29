import Panel from '@kupm/common/Panel';
import NotificationList from '@kupm/features/dashboard/NotificationList';
import NotificationPanelOptions from '@kupm/features/dashboard/NotificationPanelOptions';
import React from 'react';

const NotificationPanel = () => {
  return (
    <Panel heading="Recent Notifications" Options={NotificationPanelOptions}>
      <NotificationList />
    </Panel>
  );
};

export default NotificationPanel;
