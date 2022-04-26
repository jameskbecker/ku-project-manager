import Button, { SecondaryButton } from '@kupm/common/Button';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import { ModalBackdrop, ModalContent, ModalFooter } from '@kupm/common/Modal';
import Panel from '@kupm/common/Panel';
import ScrollContainer from '@kupm/common/ScrollContainer';
import Separator from '@kupm/common/Separator';
import { fetchProjectMembers } from '@kupm/features/projects/projectsSlice';
import { toggleMembers } from '@kupm/features/tasks/tasksSlice';
import {
  faEye,
  faPencilAlt,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

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
        <ScrollContainer>
          {members.map((m: any) => (
            <MemberPanel key={m.id} data={m} />
          ))}
        </ScrollContainer>
        <Separator />

        <ModalFooter>
          <Button light text="Close" onClick={handleCancel}></Button>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default MembersModal;
