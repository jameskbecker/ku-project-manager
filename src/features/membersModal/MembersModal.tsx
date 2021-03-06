import {
  faEye,
  faPencilAlt,
  faSpinner,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { SecondaryButton } from '@kupm/common/button';
import DataPlaceholder from '@kupm/common/DataPlaceholder';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import ModalBackdrop from '@kupm/common/modal/ModalBackdrop';
import ModalContent from '@kupm/common/modal/ModalContent';
import ModalFooter from '@kupm/common/modal/ModalFooter';
import Panel from '@kupm/common/Panel';
import ScrollContainer from '@kupm/common/ScrollContainer';
import Separator from '@kupm/common/Separator';
import { useGetProjectMembersQuery } from '@kupm/features/api/apiSlice';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { hideMembersModal } from './membersModalSlice';

const MemberPanel = ({ data }: any) => {
  const theme = useContext(ThemeContext);

  const getPermissionText = () => {
    if (data.isOwner) return 'Owner';
    else if (data.canRead && data.canWrite) return 'Can Read and Write';
    else if (data.canRead) return 'Can Read';
    else return 'Restricted';
  };

  return (
    <Panel secondary style={{ flex: '0 0 auto' }}>
      <FlexRow>
        <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
          <h4>
            {data.lastName}, {data.firstName}
          </h4>
          <h5>{getPermissionText()}</h5>
          <p>Joined {data.joinedAt}</p>
        </FlexColumn>
        <FlexRow style={{ gap: '0.5rem' }}>
          <SecondaryButton icon={faEye} />
          <SecondaryButton icon={faPencilAlt} />
          <SecondaryButton icon={faUserMinus} />
        </FlexRow>
      </FlexRow>
    </Panel>
  );
};
const MembersModal = () => {
  const { id } = useParams<any>();
  const { data: members, isLoading } = useGetProjectMembersQuery({ id });

  const dispatch = useDispatch();

  const handleCancel = () => dispatch(hideMembersModal());
  let content;
  if (isLoading) {
    content = (
      <DataPlaceholder>
        <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
      </DataPlaceholder>
    );
  } else {
    content = (
      <ScrollContainer>
        {members.data.map((m: any) => (
          <MemberPanel key={m.id} data={m} />
        ))}
      </ScrollContainer>
    );
  }

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent
        secondary
        style={{ height: '550px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ flex: '0 0 auto' }}>Members</h2>

        <Separator />
        {content}
        <Separator />

        <ModalFooter>
          <Button light text="Close" onClick={handleCancel}></Button>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default MembersModal;
