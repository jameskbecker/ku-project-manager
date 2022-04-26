import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { Task } from '@kupm/types';
import { SecondaryButton } from '@kupm/components/common/Button';
import ContextMenu from '@kupm/components/common/ContextMenu';
import { FlexColumn, FlexRow } from '@kupm/components/common/Flex';
import Panel from '@kupm/components/common/Panel';

type TodoPanelProps = {
  todo: Task;
};

const StyledTodoPanel = styled(Panel)`
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

const TodoPanel = ({ data }: any) => {
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    history.push(`/projects/${data.projectId}/${data.id}`);
  };

  const OptionMenu = () => {
    return (
      <ContextMenu
        items={[
          { label: 'Add Comment', onClick: null },
          { label: 'Edit', onClick: null },
          { label: 'Delete', onClick: null, color: theme },
        ]}
      >
        <SecondaryButton secondary icon={faEllipsisV} onClick={null} />
      </ContextMenu>
    );
  };

  return (
    <StyledTodoPanel secondary key={data.id} onClick={handleClick}>
      <FlexColumn style={{ flex: '1 1', gap: '0.5rem' }}>
        <h4>{data.heading}</h4>
        <h5>{data.subHeading}</h5>
        <p>{data.body}</p>
      </FlexColumn>

      <FlexRow style={{ overflow: 'visible', gap: '0.5rem' }}>
        <StyledIcon icon={faSquare} />
        <OptionMenu />
      </FlexRow>
    </StyledTodoPanel>
  );
};

export default TodoPanel;
