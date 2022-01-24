import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import Button from '../../global/Button';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: control;

  background-color: ${theme.control};
  padding: 1rem;

  //border-bottom: 1px solid ${theme.sidebar};
`;

const ControlBar = () => {
  return (
    <ControlBarWrapper>
      <div>
        <Button
          icon={faPlus}
          text="Add Task"
          color={theme.primary}
          onClick={null}
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
