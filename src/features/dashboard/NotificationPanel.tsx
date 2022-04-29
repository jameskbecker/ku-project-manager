import Panel from '@kupm/common/Panel';
import React from 'react';
import NotificationList from './NotificationList';
import NotificationPanelOptions from './NotificationPanelOptions';

const NotificationPanel = () => {
  return (
    <Panel heading="Recent Notifications" Options={NotificationPanelOptions}>
      <NotificationList />
    </Panel>
  );
};

export default NotificationPanel;
