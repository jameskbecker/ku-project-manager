import {
  faCheck,
  faTimes,
  faUserCheck,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import users from '../../../mock-data/user';
import { Comment, User } from '../../../types';
import { SecondaryButton } from '../../global/Button';
import { FlexColumn, FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';

type NotificationPanelProps = {
  data: any;
};

const StyledNotificationPanel = styled(Panel)`
  flex: 0 0 auto;
  flex-direction: row;

  p {
    white-space: nowrap;
  }
`;

const NotificationPanel = ({ data }: NotificationPanelProps) => {
  const handleInviteAccept = () => {
    console.log('accept');
  };

  const handleInviteDecline = () => {
    console.log('decline');
  };

  const ExtraOptions = () => {
    switch (data.type) {
      case 'invite':
        return (
          <FlexRow style={{ gap: '0.5rem' }}>
            <SecondaryButton icon={faCheck} onClick={handleInviteAccept} />
            <SecondaryButton icon={faTimes} onClick={handleInviteDecline} />
          </FlexRow>
        );

      default:
        return null;
    }
  };

  return (
    <StyledNotificationPanel secondary key={data.id}>
      <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
        <h4>{data.heading}</h4>
        <h5>{data.subHeading}</h5>
        {data.body && <p>{data.body}</p>}
      </FlexColumn>
      {ExtraOptions()}
    </StyledNotificationPanel>
  );
};

export default NotificationPanel;
