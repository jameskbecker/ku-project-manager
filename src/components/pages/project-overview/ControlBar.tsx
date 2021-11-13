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
  margin: 1em;
`;

const ControlBar = () => {
  return (
    <ControlBarWrapper>
      <div>
        <Button icon={faPlus} color={theme.primary} />
      </div>
      <div>
        <Button text="Delete All" color={theme.error} icon={faTimes} />
      </div>
    </ControlBarWrapper>
  );
};

export default ControlBar;
