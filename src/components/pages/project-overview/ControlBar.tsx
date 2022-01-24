import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectProject, toggleNewProject } from '../../../store/projects';
import theme from '../../../theme';
import Button from '../../global/Button';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  grid-area: control;

  background-color: ${theme.control};
  padding: 1em;

  /* border-bottom: 1px solid ${theme.sidebar}; */
`;

const ControlBar = () => {
  const dispatch = useDispatch();

  const handleNewProject = () => {
    dispatch(selectProject(''));
    dispatch(toggleNewProject());
  };

  return (
    <ControlBarWrapper>
      <div>
        <Button
          icon={faPlus}
          text="New Project"
          onClick={handleNewProject}
          round
        />
      </div>
      <div>
        <Button
          light
          text="Delete All Projects"
          color={theme.error}
          icon={faTimes}
        />
      </div>
    </ControlBarWrapper>
  );
};

export default ControlBar;
