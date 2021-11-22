import React from 'react';
import users from '../../../mock-data/user';
import { Comment, User } from '../../../types';
import Panel from '../../global/Panel';

type NotificationPanelProps = {
  comment: Comment;
};

const NotificationPanel = ({ comment }: NotificationPanelProps) => {
  const [sender] = users.filter((u: User) => u.id === comment.senderId);
  return (
    <Panel
      secondary
      heading={`New Comment from ${sender.lastName}, ${sender.firstName}`}
      key={comment.id}
    >
      <div>{new Date(comment.sendTime).toLocaleDateString()}</div>
      <div>
        {comment.details.length >= 50
          ? `${comment.details.slice(0, 50)}...`
          : comment.details}
      </div>
    </Panel>
  );
};

export default NotificationPanel;
