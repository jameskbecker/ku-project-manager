import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { FlexColumn, FlexRow } from './Flex';
import Panel from './Panel';

export const ModalBackdrop = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  height: 100%;

  background: #000000c5;
  z-index: 100;
  cursor: pointer;

  & > * {
    flex: 0 1 auto;
  }

  h2 {
    font-weight: 600;
    color: ${theme.text};

    text-overflow: ellipsis;
    text-indent: 0;
    padding: 0.5rem 0;
    overflow: hidden;
    white-space: nowrap;

    user-select: none;
  }
`;

export const ModalContent = styled(Panel)`
  flex: 0 1 auto;
  min-width: 300px;

  background: ${theme.secondaryA};

  opacity: 1;
  cursor: default;

  :hover {
    background: ${theme.secondaryA};
  }
`;

export const ModalFooter = styled(FlexColumn)``;
