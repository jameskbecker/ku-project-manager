import {
  faPencilAlt,
  faPlus,
  faSearch,
  faTimes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectProject, toggleNewProject } from '../../../store/projects';
import { applyFilter, toggleNewTask } from '../../../store/tasks';
import theme from '../../../theme';
import Button from '../../global/Button';
import { FlexRow } from '../../global/Flex';
import TextInput from '../../global/input/TextInput';

const ControlBarWrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 350px 2fr 350px;
  align-items: center;
  grid-area: control;
  gap: 0.75rem;

  background: ${theme.control};
  padding: 1rem;

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

  const handleInvite = () => {};

  const handleSearch = (e: any) => {
    const { value } = e.target;
    dispatch(applyFilter({ text: value }));
  };

  const handleEdit = () => {
    dispatch(toggleNewProject());
  };

  return (
    <ControlBarWrapper>
      <FlexRow>
        <Button icon={faPlus} text="New Task" onClick={handleNewTask} round />
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
          <Button
            icon={faPencilAlt}
            text="Edit Project"
            color={theme.warn}
            onClick={handleEdit}
            light
          />
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
