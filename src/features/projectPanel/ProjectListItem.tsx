import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryButton } from '@kupm/common/Button';
import ContextMenu from '@kupm/common/contextMenu/ContextMenu';
import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import Panel from '@kupm/common/Panel';
import { Project } from '@kupm/types';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

type UpcomingPanelProps = {
  project: Project;
};

const StyledProjectListItem = styled(Panel)`
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

const ProjectListItem = ({ project }: UpcomingPanelProps) => {
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
    <StyledProjectListItem key={project.id} secondary onClick={handleClick}>
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
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
