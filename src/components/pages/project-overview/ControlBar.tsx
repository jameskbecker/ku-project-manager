import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
        <Button>
          <FontAwesomeIcon icon={faPlus} color={theme.bg} />
        </Button>
      </div>
      <div>
        <Button color={theme.error}>Clear Projects</Button>
      </div>
    </ControlBarWrapper>
  );
};

export default ControlBar;
