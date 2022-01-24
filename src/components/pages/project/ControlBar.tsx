import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';

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
      <FlexRow>
        <Button icon={faPlus} text="Add Task" onClick={null} round />
        <Button
          icon={faPlus}
          text="Invite Members"
          onClick={null}
          round
          light
        />
      </FlexRow>
      <FlexRow>
        <Button
          light
          text="Delete All Tasks"
          color={theme.error}
          icon={faTimes}
        />
      </FlexRow>
    </ControlBarWrapper>
  );
};

export default ControlBar;
