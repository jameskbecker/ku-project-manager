import React from 'react';
import styled from 'styled-components';
import users from '../../../mock-data/user';
import { Comment, User } from '../../../types';
import Panel from '../../global/Panel';

type NotificationPanelProps = {
  comment: Comment;
};

const StyledNotificationPanel = styled(Panel)`
  flex: 0 0 auto;
  gap: 0.5rem;
`;

const NotificationPanel = ({ comment }: NotificationPanelProps) => {
  const [sender] = users.filter((u: User) => u.id === comment.senderId);
  return (
    <StyledNotificationPanel secondary key={comment.id}>
      <h4>{`New Comment from ${sender.lastName}, ${sender.firstName}`}</h4>
      <h5>Project Name</h5>
      <p>{comment.details}</p>
    </StyledNotificationPanel>
  );
};

export default NotificationPanel;
