import {
  faEye,
  faPencilAlt,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectMembers } from '../../store/projects';
import { toggleAddComment, toggleMembers } from '../../store/tasks';
import theme from '../../theme';
import Button from '../global/Button';
import { FlexColumn, FlexRow } from '../global/Flex';
import { ModalBackdrop, ModalContent, ModalFooter } from '../global/Modal';
import Panel from '../global/Panel';
import Separator from '../global/Separator';

const MemberPanel = ({ data }: any) => {
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
        <FlexRow>
          <FontAwesomeIcon icon={faEye} color={theme.accent} />
          <FontAwesomeIcon icon={faPencilAlt} color={theme.accent} />
          <FontAwesomeIcon icon={faUserMinus} color={theme.error} />
        </FlexRow>
      </FlexRow>
    </Panel>
  );
};

const MembersModal = () => {
  const { members, selectedProject } = useSelector(
    (state: any) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectMembers({ projectId: selectedProject }));
  }, []);

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
          {members.map((m: any) => (
            <MemberPanel key={m.id} data={m} />
          ))}
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
