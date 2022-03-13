import {
  faEye,
  faPencilAlt,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAddComment, toggleMembers } from '../../store/tasks';
import theme from '../../theme';
import Button from '../global/Button';
import { FlexColumn, FlexRow } from '../global/Flex';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Panel from '../global/Panel';
import Separator from '../global/Separator';

const MemberPanel = () => (
  <Panel secondary style={{ flex: '0 0 auto' }}>
    <FlexRow>
      <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
        <h4>DOE, John R.</h4>
        <h5>Can Read and Write</h5>
        <p>Joined 04/03/2022 at 11:59 PM</p>
      </FlexColumn>
      <FlexRow>
        <FontAwesomeIcon icon={faEye} color={theme.accent} />
        <FontAwesomeIcon icon={faPencilAlt} color={theme.accent} />
        <FontAwesomeIcon icon={faUserMinus} color={theme.error} />
      </FlexRow>
    </FlexRow>
  </Panel>
);

const MembersModal = () => {
  const dispatch = useDispatch();

  const handleCancel = () => dispatch(toggleMembers());

  return (
    <ModalBackdrop onClick={handleCancel}>
      <ModalContent
        secondary
        style={{ height: '550px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ flex: '0 0 auto' }}>Members</h2>

        <Separator />
        <FlexColumn style={{ flex: '1 1', overflow: 'auto' }}>
          <MemberPanel />
          <MemberPanel />
          <MemberPanel />
          <MemberPanel />
        </FlexColumn>
        <Separator />

        <ModalFooter>
          <Button light text="Close" onClick={handleCancel}></Button>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default MembersModal;
