import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '@kupm/common/button';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import Panel from '@kupm/common/Panel';

type NotificationListItemProps = {
  data: any;
};

const StyledNotificationListItem = styled(Panel)`
  flex: 0 0 auto;
  flex-direction: row;

  p {
    white-space: nowrap;
  }
`;

const NotificationListItem = ({ data }: NotificationListItemProps) => {
  const handleInviteAccept = () => {};

  const handleInviteDecline = () => {};

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
    <StyledNotificationListItem secondary>
      <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
        <h4>{data.heading}</h4>
        <h5>{data.subHeading}</h5>
        {data.body && <p>{data.body}</p>}
      </FlexColumn>
      {ExtraOptions()}
    </StyledNotificationListItem>
  );
};

export default NotificationListItem;
