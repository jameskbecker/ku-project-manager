import { formatDistance } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import users from '../../../mock-data/user';
import { Comment, User } from '../../../types';
import Panel from '../../global/Panel';

type NotificationPanelProps = {
  data: any;
};

const StyledNotificationPanel = styled(Panel)`
  flex: 0 0 auto;
  gap: 0.5rem;
`;

const NotificationPanel = ({ data }: NotificationPanelProps) => {
  return (
    <StyledNotificationPanel secondary key={data.id}>
      <h4>{data.heading}</h4>
      <h5>{data.subHeading}</h5>
      <p>{data.body}</p>
    </StyledNotificationPanel>
  );
};

export default NotificationPanel;
