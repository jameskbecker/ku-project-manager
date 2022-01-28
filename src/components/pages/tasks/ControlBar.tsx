import {
  faPencilAlt,
  faPlus,
  faSearch,
  faTimes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { applyFilter } from '../../../store/tasks';
import theme from '../../../theme';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';

const ControlBarWrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  grid-area: control;
  gap: 0.5rem;

  background: ${theme.control};
  padding: 1rem;

  //border-bottom: 1px solid ${theme.sidebar};
`;

const ControlBar = () => {
  const { id, taskId } = useParams<any>();
  const { filter } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    dispatch(applyFilter({ text: value }));
  };

  return (
    <ControlBarWrapper>
      <FlexRow>
        <Button icon={faPlus} text="Add Task" onClick={null} round />
        {!taskId && (
          <Button
            icon={faUserPlus}
            text="Invite Members"
            onClick={null}
            round
            light
          />
        )}
      </FlexRow>

      <TextInput
        placeholder="Search"
        icon={faSearch}
        value={filter}
        onChange={handleSearch}
      />

      <FlexRow style={{ justifyContent: 'flex-end' }}>
        {!taskId && (
          <Button icon={faPencilAlt} text="Edit Project" onClick={null} light />
        )}
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
