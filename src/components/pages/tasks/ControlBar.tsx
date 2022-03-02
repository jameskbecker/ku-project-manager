import {
  faPencilAlt,
  faPlus,
  faSearch,
  faTimes,
  faTrashAlt,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  selectProject,
  toggleInvite,
  toggleNewProject,
} from '../../../store/projects';
import { applyFilter, toggleNewTask } from '../../../store/tasks';
import theme from '../../../theme';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: 350px 2fr 350px; */
  align-items: center;
  grid-area: control;
  gap: 0.75rem;

  background: ${theme.control};
  padding: 0.75rem 1rem;

  //border-bottom: 1px solid ${theme.sidebar};
  border-bottom: 1px solid ${theme.secondary};
`;

const ControlBar = () => {
  const { id, taskId } = useParams<any>();
  const { filter } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectProject(id));
  }, []);

  const handleNewTask = () => dispatch(toggleNewTask());

  const handleInvite = () => {
    dispatch(toggleInvite());
  };

  const handleSearch = (e: any) => {
    const { value } = e.target;
    dispatch(applyFilter({ text: value }));
  };

  return (
    <ControlBarWrapper>
      <FlexRow style={{ flex: '2 2' }}>
        <Button icon={faPlus} text="New Task" onClick={handleNewTask} round />
        {!taskId && (
          <Button
            icon={faUserPlus}
            text="Invite Members"
            onClick={handleInvite}
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
        style={{ flex: '2 2' }}
      />

      <FlexRow style={{ justifyContent: 'flex-end', flex: '2 2' }}>
        {!taskId && (
          <Button icon={faUsers} text="View Members" onClick={null} light />
        )}
        <Button
          light
          text="Delete All Tasks"
          color={theme.error}
          icon={faTrashAlt}
        />
      </FlexRow>
    </ControlBarWrapper>
  );
};

export default ControlBar;
