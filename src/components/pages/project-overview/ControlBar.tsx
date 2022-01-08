import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
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

const ControlBar = ({ toggleModal }: any) => {
  return (
    <ControlBarWrapper>
      <div>
        <Button
          icon={faPlus}
          text="New Project"
          color={theme.primary}
          onClick={toggleModal}
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
