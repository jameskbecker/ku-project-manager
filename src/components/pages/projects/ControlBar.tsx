import Button from '@kupm/components/global/Button';
import { FlexRow } from '@kupm/components/global/Flex';
import TextInput from '@kupm/components/global/input/TextInput';
import {
  applyFilter,
  selectProject,
  toggleDeleteAll,
  toggleNewProject,
} from '@kupm/store/projects';
import {
  faPlus,
  faSearch,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: 350px 2fr 350px; */
  align-items: center;
  grid-area: control;
  gap: 0.75rem;

  background: ${({ theme }) => theme.control};
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};

  & > * {
    overflow: visible;
  }

  & > :first-child,
  & > :last-child {
    flex: 2 2;

    & > * {
      flex: 1 1;
    }
  }

  /* Mobile */
  @media screen and (max-width: 479px) {
    & > :nth-child(2) {
      display: none;
    }
  }
`;

const ControlBar = () => {
  const theme = useContext(ThemeContext);
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
      <FlexRow>
        <Button
          icon={faPlus}
          text="New Project"
          onClick={handleNewProject}
          round
        />
        <div></div>
      </FlexRow>
      <TextInput
        placeholder="Search"
        icon={faSearch}
        onChange={handleSearch}
        value={filter}
        style={{ flex: '3 3' }}
      />
      <FlexRow>
        <div></div>
        <Button
          light
          text="Delete All Projects"
          color={theme.error}
          icon={faTrashAlt}
          onClick={handleDeleteAll}
        />
      </FlexRow>
    </ControlBarWrapper>
  );
};

export default ControlBar;
