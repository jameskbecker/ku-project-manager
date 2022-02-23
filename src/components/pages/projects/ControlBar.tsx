import {
  faCheck,
  faPlus,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  applyFilter,
  selectProject,
  toggleDeleteAll,
  toggleInvite,
  toggleNewProject,
} from '../../../store/projects';
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
  padding: 0 1rem;

  & > * {
    overflow: visible;
  }

  border-bottom: 1px solid ${theme.secondary};
`;

const ControlBar = () => {
  const { filter } = useSelector((state: any) => state.projects);
  const dispatch = useDispatch();

  const handleNewProject = () => {
    dispatch(selectProject(''));
    dispatch(toggleNewProject());
  };

  const handleSearch = (e: any) => {
    const { value } = e.target;
    dispatch(applyFilter({ text: value }));
  };

  const handleDeleteAll = (e: any) => {
    dispatch(toggleDeleteAll());
  };

  return (
    <ControlBarWrapper>
      <FlexRow style={{ height: '100%' }}>
        <Button
          icon={faPlus}
          text="New Project"
          onClick={handleNewProject}
          round
        />
      </FlexRow>
      <TextInput
        placeholder="Search"
        icon={faSearch}
        onChange={handleSearch}
        value={filter}
      />
      <FlexRow style={{ justifyContent: 'flex-end' }}>
        {/* <Button
          light
          text="Mark as Completed (0)"
          color={theme.error}
          icon={faCheck}
        /> */}
        <Button
          light
          text="Delete All Projects"
          color={theme.textBody}
          icon={faTimes}
          onClick={handleDeleteAll}
        />
      </FlexRow>
    </ControlBarWrapper>
  );
};

export default ControlBar;
