import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { Project } from '../../../types';
import { SecondaryButton } from '../../global/Button';
import ContextMenu from '../../global/ContextMenu';
import { FlexColumn, FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';

type UpcomingPanelProps = {
  project: Project;
};

const StyledUpcomingPanel = styled(Panel)`
  flex: 0 0 auto;
  flex-direction: row;
  gap: 0.5rem;

  overflow: visible;

  p {
    white-space: nowrap;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.brand};
`;

const UpcomingPanel = ({ project }: UpcomingPanelProps) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/projects/${project.id}`);
  };

  const OptionMenu = () => {
    return (
      <ContextMenu
        items={[
          { label: 'Invite Member', onClick: null },
          { label: 'Delete Project', onClick: null, color: theme.error },
        ]}
      >
        <SecondaryButton secondary icon={faEllipsisV} onClick={null} />
      </ContextMenu>
    );
  };

  return (
    <StyledUpcomingPanel key={project.id} secondary onClick={handleClick}>
      <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
        <h4>{project.name}</h4>
        <h5>
          {/**@ts-ignore */}
          {format(new Date(project.dueAt), "'Due' do LLL y 'at' hh:mm aa")}
        </h5>
      </FlexColumn>

      <FlexRow style={{ overflow: 'visible', gap: '0.5rem' }}>
        <StyledIcon icon={faSquare} />
        <OptionMenu />
      </FlexRow>
    </StyledUpcomingPanel>
  );
};

export default UpcomingPanel;
