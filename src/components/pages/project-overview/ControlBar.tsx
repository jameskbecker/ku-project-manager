import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleNewProject } from '../../../store/projects';
import theme from '../../../theme';
import Button from '../../global/Button';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  grid-area: control;
  padding: 1em;

  border-bottom: 1px solid ${theme.sidebar};
`;

const ControlBar = () => {
  const dispatch = useDispatch();

  const handleNewProject = () => {
    dispatch(toggleNewProject());
  };

  return (
    <ControlBarWrapper>
      <div>
        <Button
          icon={faPlus}
          text="New Project"
          color={theme.primary}
          onClick={handleNewProject}
          round
        />
      </div>
      <div>
        <Button light text="Delete All" color={theme.error} icon={faTimes} />
      </div>
    </ControlBarWrapper>
  );
};

export default ControlBar;
