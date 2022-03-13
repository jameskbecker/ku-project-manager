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
`;

export const ModalContent = styled(Panel)`
  flex: 0 1 auto;
  width: calc(100% - 2rem);

  background: ${theme.primary};
  padding: 1rem;

  opacity: 1;
  cursor: default;
  overflow: visible;

  :hover {
    background: ${theme.primary};
  }

  /**Tablet */
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const ModalFooter = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0;
  margin: 0;

  & > * {
    flex: 1 0 auto;
  }

  /** Tablet  */
  @media screen and (min-width: 768px) {
    flex: 0 0 auto;
    flex-direction: row;

    & > * {
      flex: 1 1;
    }
  }
`;
