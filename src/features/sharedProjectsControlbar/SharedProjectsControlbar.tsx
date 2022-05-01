import {
  faPlus,
  faSearch,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@kupm/common/Button';
import { FlexRow } from '@kupm/common/Flex';
import TextInput from '@kupm/common/input/TextInput';
import { selectProject } from '@kupm/features/projects/projectsSlice';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import { showDeleteProjectsModal } from '../deleteProjectsModal/deleteProjectsModalSlice';
import { showNewProjectModal } from '../newProjectModal/newProjectModalSlice';
import { applyFilter } from './SharedProjectsControlbarSlice';

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const SharedProjectsControlbar = () => {
  const { filter } = useSelector(
    (state: any) => state.sharedProjectsControlbar
  );
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    dispatch(applyFilter({ text: value }));
  };

  return (
    <ControlBarWrapper>
      <TextInput
        placeholder="Search"
        icon={faSearch}
        onChange={handleSearch}
        value={filter}
        style={{ flex: '3 3' }}
      />
    </ControlBarWrapper>
  );
};

export default SharedProjectsControlbar;
